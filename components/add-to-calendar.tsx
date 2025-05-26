"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface AddToCalendarProps {
  eventName: string;
  eventDescription: string;
  eventLocation: string;
  startDate: Date | string;
  endDate?: Date | string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export function AddToCalendar({
  eventName,
  eventDescription,
  eventLocation,
  startDate,
  endDate,
  className,
  variant = "default",
  size = "default",
}: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Format dates for calendar links
  const formatDate = (date: Date | string): Date => {
    return typeof date === "string" ? new Date(date) : date;
  };

  const start = formatDate(startDate);
  const end = endDate
    ? formatDate(endDate)
    : new Date(start.getTime() + 3 * 60 * 60 * 1000); // Default to 3 hours later

  // Format for Google Calendar
  const formatGoogleCalendarDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  };

  // Format for iCal
  const formatICalDate = (date: Date) => {
    return date
      .toISOString()
      .replace(/-|:|\.\d+/g, "")
      .slice(0, -1);
  };

  // Generate Google Calendar URL
  const googleCalendarUrl = () => {
    const baseUrl = "https://calendar.google.com/calendar/render";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: eventName,
      details: eventDescription,
      location: eventLocation,
      dates: `${formatGoogleCalendarDate(start)}/${formatGoogleCalendarDate(
        end
      )}`,
    });

    return `${baseUrl}?${params.toString()}`;
  };

  // Generate Outlook Web URL
  const outlookWebUrl = () => {
    const baseUrl = "https://outlook.live.com/calendar/0/deeplink/compose";
    const params = new URLSearchParams({
      subject: eventName,
      body: eventDescription,
      location: eventLocation,
      startdt: start.toISOString(),
      enddt: end.toISOString(),
      path: "/calendar/action/compose",
      rru: "addevent",
    });

    return `${baseUrl}?${params.toString()}`;
  };

  // Generate iCal file content
  const generateICalContent = () => {
    const content = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${formatICalDate(start)}`,
      `DTEND:${formatICalDate(end)}`,
      `SUMMARY:${eventName}`,
      `DESCRIPTION:${eventDescription}`,
      `LOCATION:${eventLocation}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    return content;
  };

  // Download iCal file
  const downloadICalFile = () => {
    const content = generateICalContent();
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/calendar" });
    element.href = URL.createObjectURL(file);
    element.download = `${eventName.replace(/\s+/g, "-")}.ics`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Button variants
  const buttonVariants = {
    default: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "text-accent hover:bg-accent/10",
  };

  const buttonSizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "flex items-center gap-2 transition-all duration-300",
            buttonVariants[variant],
            buttonSizes[size],
            className
          )}
        >
          <Calendar className="h-4 w-4" />
          <span>Add to Calendar</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          onClick={() => window.open(googleCalendarUrl(), "_blank")}
        >
          Google Calendar
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open(outlookWebUrl(), "_blank")}
        >
          Outlook Calendar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={downloadICalFile}>
          Apple Calendar (iCal)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
