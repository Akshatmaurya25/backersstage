"use client"

import { useState, useEffect } from "react"
import { Bell, Calendar, Check, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { reminderService } from "@/lib/reminder-service"
import { ConfettiEffect } from "./confetti-effect"

interface EventReminderProps {
  eventName: string
  eventDate: Date | string
  eventLocation?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

export function EventReminder({
  eventName,
  eventDate,
  eventLocation,
  className,
  variant = "default",
  size = "default",
}: EventReminderProps) {
  const [open, setOpen] = useState(false)
  const [reminderSet, setReminderSet] = useState(false)
  const [reminderTime, setReminderTime] = useState<string>("1day")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  // Check if reminder is already set for this event
  useEffect(() => {
    const hasReminder = reminderService.hasReminderForEvent(eventName, eventDate)
    setReminderSet(hasReminder)
  }, [eventName, eventDate])

  const handleSetReminder = async () => {
    setIsSubmitting(true)

    // Add reminder using the service
    try {
      reminderService.addReminder(eventName, eventDate, reminderTime)
      setReminderSet(true)

      // Trigger confetti
      setShowConfetti(true)

      // Show success state briefly before closing
      setTimeout(() => {
        setOpen(false)
      }, 2000)
    } catch (error) {
      console.error("Failed to set reminder:", error)
      // In a real app, we would show an error message
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date | string) => {
    const d = typeof date === "string" ? new Date(date) : date
    return d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  }

  const buttonVariants = {
    default: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "text-accent hover:bg-accent/10",
  }

  const buttonSizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={cn(
          "flex items-center gap-2 transition-all duration-300",
          buttonVariants[variant],
          buttonSizes[size],
          className,
        )}
      >
        {reminderSet ? (
          <>
            <Check className="h-4 w-4" />
            <span>Reminder Set</span>
          </>
        ) : (
          <>
            <Bell className="h-4 w-4" />
            <span>Set Reminder</span>
          </>
        )}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Set Event Reminder</DialogTitle>
            <DialogDescription>
              We'll send you a reminder before the event starts so you don't miss it.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{eventName}</div>
                  <div className="text-sm text-neutral-400">{formatDate(eventDate)}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{formatTime(eventDate)}</div>
                  {eventLocation && <div className="text-sm text-neutral-400">{eventLocation}</div>}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium">Remind me</div>
              <RadioGroup value={reminderTime} onValueChange={setReminderTime} className="gap-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1hour" id="r1" />
                  <Label htmlFor="r1">1 hour before</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3hours" id="r2" />
                  <Label htmlFor="r2">3 hours before</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1day" id="r3" />
                  <Label htmlFor="r3">1 day before</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1week" id="r4" />
                  <Label htmlFor="r4">1 week before</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <DialogFooter className="sm:justify-between">
            <Button variant="ghost" onClick={() => setOpen(false)} disabled={isSubmitting}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button
              onClick={handleSetReminder}
              disabled={isSubmitting || reminderSet}
              className="bg-accent text-accent-foreground"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Setting Reminder...
                </>
              ) : reminderSet ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Reminder Set!
                </>
              ) : (
                <>
                  <Bell className="mr-2 h-4 w-4" />
                  Set Reminder
                </>
              )}
            </Button>
          </DialogFooter>

          {/* Confetti effect when reminder is set */}
          <ConfettiEffect
            trigger={showConfetti}
            onComplete={() => setShowConfetti(false)}
            duration={2000}
            particleCount={150}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
