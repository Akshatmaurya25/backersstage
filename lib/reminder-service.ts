// This is a client-side service to handle event reminders
// In a real application, this would connect to a backend service

interface Reminder {
  id: string
  eventName: string
  eventDate: Date
  reminderTime: string
  notificationTime: Date
}

class ReminderService {
  private reminders: Reminder[] = []
  private storageKey = "backersstage-reminders"

  constructor() {
    this.loadReminders()
  }

  private loadReminders(): void {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(this.storageKey)
      if (stored) {
        try {
          const parsed = JSON.parse(stored)
          this.reminders = parsed.map((r: any) => ({
            ...r,
            eventDate: new Date(r.eventDate),
            notificationTime: new Date(r.notificationTime),
          }))
        } catch (e) {
          console.error("Failed to parse stored reminders", e)
          this.reminders = []
        }
      }
    }
  }

  private saveReminders(): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.storageKey, JSON.stringify(this.reminders))
    }
  }

  public addReminder(eventName: string, eventDate: Date | string, reminderTime: string): Reminder {
    const date = typeof eventDate === "string" ? new Date(eventDate) : eventDate

    // Calculate notification time based on reminderTime
    const notificationTime = new Date(date)

    switch (reminderTime) {
      case "1hour":
        notificationTime.setHours(notificationTime.getHours() - 1)
        break
      case "3hours":
        notificationTime.setHours(notificationTime.getHours() - 3)
        break
      case "1day":
        notificationTime.setDate(notificationTime.getDate() - 1)
        break
      case "1week":
        notificationTime.setDate(notificationTime.getDate() - 7)
        break
      default:
        notificationTime.setDate(notificationTime.getDate() - 1) // Default to 1 day
    }

    const reminder: Reminder = {
      id: Math.random().toString(36).substring(2, 9),
      eventName,
      eventDate: date,
      reminderTime,
      notificationTime,
    }

    this.reminders.push(reminder)
    this.saveReminders()

    // In a real app, we would register this with a notification service
    // For now, we'll just log it
    console.log(`Reminder set for ${eventName} at ${notificationTime.toLocaleString()}`)

    return reminder
  }

  public getReminders(): Reminder[] {
    return [...this.reminders]
  }

  public removeReminder(id: string): void {
    this.reminders = this.reminders.filter((r) => r.id !== id)
    this.saveReminders()
  }

  public hasReminderForEvent(eventName: string, eventDate: Date | string): boolean {
    const date = typeof eventDate === "string" ? new Date(eventDate) : eventDate
    return this.reminders.some((r) => r.eventName === eventName && r.eventDate.getTime() === date.getTime())
  }
}

// Export as singleton
export const reminderService = new ReminderService()
