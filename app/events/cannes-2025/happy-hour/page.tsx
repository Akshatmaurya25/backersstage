"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  CheckCircle,
  Crown,
  Mail,
  ChevronRight,
  Clock,
  ExternalLink,
  Wine,
  Building,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { AnimatedCountdown } from "@/components/animated-countdown";
import { EventReminder } from "@/components/event-reminder";
import { AddToCalendar } from "@/components/add-to-calendar";

export default function HappyHourPage() {
  const eventDate = new Date("2025-06-30T16:30:00");
  const [activeAccess, setActiveAccess] = useState(0);

  const accessTypes = [
    {
      title: "Private Access",
      subtitle: "Invite-Only",
      icon: Crown,
      color: "from-amber-500/20 to-amber-500/5",
      features: [
        "For VCs, Investors, and Selected Founders",
        "Access to top-tier founders & VCs",
        "Soft introductions & post-Demo Day follow-ups",
        "Private deal discussions and co-investment exploration",
        "Mentorship opportunities with strategic alignment",
        "Premium Food, Drink, Relaxed, high-trust environment",
      ],
    },
    {
      title: "Open Access",
      subtitle: "Approval Required",
      icon: Globe,
      color: "from-blue-500/20 to-blue-500/5",
      features: [
        "For Selected Founders, BD, and ecosystem",
        "Informal networking with global attendees",
        "Recap energy from the Demo Day",
        "Interactions with mentors, partners, and other funders",
        "Drinks & music to keep the night alive",
        "Limited – Approval Required",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-neutral-900"></div>
          <Image
            src="/luxury-cannes-venue.png"
            alt="Le Roof at Five Seas Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
        </div>

        <div className="container-xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <div className="flex items-center space-x-2">
                <Wine className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Following the Demo Day
                </span>
              </div>
            </div>

            <h1 className="heading-xl mb-6">
              Founder × VC <span className="text-gradient">Happy Hour</span>
            </h1>

            {/* Event details badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm">Monday, June 30, 2025</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm">4:30 PM - 5:30 PM GMT+2</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">
                  Le Roof at Five Seas Hotel, Cannes
                </span>
              </div>
            </div>

            <p className="body-lg text-neutral-300 mb-10 max-w-3xl mx-auto">
              Following our fully founder-focused Demo Day & Pitching
              Competition, we're hosting an exclusive Founder x VC Happy Hour,
              designed to deepen conversations and unlock new relationships that
              began earlier in the day.
            </p>

            <div className="mb-10">
              <div className="flex flex-col items-center">
                <div className="text-sm text-neutral-400 mb-4">
                  Happy Hour starts in:
                </div>
                <AnimatedCountdown
                  targetDate={eventDate}
                  size="lg"
                  showTimezone={true}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                >
                  <Link href="https://lu.ma/n62kou2w" target="_blank">
                    <span className="relative z-10 flex items-center">
                      Register on Luma
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </MagneticButton>

              <EventReminder
                eventName="Founder × VC Happy Hour @ ETH CC"
                eventDate={eventDate}
                eventLocation="Le Roof at Five Seas Hotel, Cannes"
                size="lg"
                variant="outline"
              />

              <AddToCalendar
                eventName="Founder × VC Happy Hour @ ETH CC"
                eventDescription="Exclusive networking event following the BackersStage Demo Day"
                eventLocation="Le Roof at Five Seas Hotel, Cannes, France"
                startDate={eventDate}
                endDate={new Date(eventDate.getTime() + 1 * 60 * 60 * 1000)} // 1 hour later
                size="lg"
                variant="secondary"
              />
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <ArrowRight className="h-10 w-10 text-accent rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Access Types Section */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Two Access Levels</h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
              Carefully curated access levels to ensure meaningful connections
              and high-quality networking.
            </p>
            <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Access Type Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-2">
                {accessTypes.map((access, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAccess(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-500 flex items-center space-x-4 group ${
                      activeAccess === index
                        ? "bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30"
                        : "bg-neutral-800/50 hover:bg-neutral-800/80 border border-neutral-800"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeAccess === index
                          ? "bg-accent/20 text-accent"
                          : "bg-neutral-700/50 text-neutral-400"
                      }`}
                    >
                      <access.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4
                        className={`font-bold transition-colors duration-300 ${
                          activeAccess === index
                            ? "text-accent"
                            : "text-neutral-300"
                        }`}
                      >
                        {access.title}
                      </h4>
                      <p
                        className={`text-sm transition-colors duration-300 ${
                          activeAccess === index
                            ? "text-accent/80"
                            : "text-neutral-500"
                        }`}
                      >
                        {access.subtitle}
                      </p>
                    </div>
                    <ChevronRight
                      className={`ml-auto h-5 w-5 transition-transform duration-300 ${
                        activeAccess === index
                          ? "text-accent translate-x-1"
                          : "text-neutral-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Access Type Content */}
            <div className="lg:col-span-8">
              <div className="relative h-full">
                {accessTypes.map(
                  (access, index) =>
                    activeAccess === index && (
                      <div
                        key={index}
                        className={`bg-gradient-to-br ${access.color} p-8 rounded-2xl border border-neutral-800 h-full`}
                      >
                        <div className="flex items-center mb-6">
                          <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                            <access.icon className="h-8 w-8 text-accent" />
                          </div>
                          <div>
                            <h3 className="heading-sm text-accent">
                              {access.title}
                            </h3>
                            <p className="text-accent/80">{access.subtitle}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {access.features.map((feature, i) => (
                            <div
                              key={i}
                              className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-lg border border-neutral-800/80 flex items-center space-x-3 group hover:border-accent/30 transition-colors duration-300"
                            >
                              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                <CheckCircle className="h-4 w-4 text-accent" />
                              </div>
                              <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 p-4 bg-neutral-900/70 backdrop-blur-md rounded-lg border border-neutral-800">
                          <p className="text-neutral-400 italic">
                            {index === 0
                              ? "Strictly curated for invited guests to enable high-quality, strategic networking."
                              : "Limited spots available - approval required for ecosystem participants."}
                          </p>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Options Section */}
      <section id="sponsor" className="section-padding">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Sponsorship Opportunities</h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
              Own the room and headline the most curated event of EthCC week.
            </p>
            <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Co-Host Sponsor */}
            <div className="custom-card p-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500 border-2 border-accent h-full">
              <div className="absolute top-0 right-0">
                <div className="bg-accent text-accent-foreground px-4 py-1 font-medium">
                  Exclusive
                </div>
              </div>

              <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Crown className="h-7 w-7" />
              </div>

              <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors duration-300">
                Co-Host — $9,000
              </h3>
              <p className="text-sm text-accent mb-4">(1/1 Exclusive Spot)</p>
              <p className="text-neutral-400 mb-6">
                Own the room. Your brand headlines the most curated event of
                EthCC.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '"VC × Founder Happy Hour by [Your Name]"',
                  "Only speaking slot at the event",
                  "6 private VIP guest passes",
                  "Full logo visibility across all invites & collateral",
                  "Featured in 20+ media partner posts",
                  "1:1 founder–VC matching list access",
                  "Logo on premium event merch",
                  "Dedicated content package post-event",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-accent/30 transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                >
                  <Link href="mailto:partner@backersstage.com">
                    <span className="relative z-10">Become Co-Host</span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </MagneticButton>
            </div>

            {/* Ecosystem Partner */}
            <div className="custom-card p-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500 h-full">
              <div className="absolute top-0 right-0">
                <div className="bg-blue-500 text-white px-4 py-1 font-medium text-sm">
                  3 Spots Only
                </div>
              </div>

              <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Building className="h-7 w-7" />
              </div>

              <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors duration-300">
                🌱 Ecosystem Partner — $4,000
              </h3>
              <p className="text-sm text-blue-400 mb-4">(3 Spots Only)</p>
              <p className="text-neutral-400 mb-6">
                Get close to capital and builders in a trusted space.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  '"Ecosystem Partner" branding',
                  "2 VIP invites",
                  "Logo in 10+ media partner posts",
                  "Optional goodie placement",
                  "Post-event intro access",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start group/item">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-accent/30 transition-colors duration-300">
                      <CheckCircle className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton>
                <Button
                  asChild
                  className="w-full relative overflow-hidden group"
                >
                  <Link href="mailto:partner@backersstage.com">
                    <span className="relative z-10">
                      Become Ecosystem Partner
                    </span>
                    <span className="absolute inset-0 bg-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="custom-card p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Ready to Partner?</h3>
              <p className="text-neutral-400 mb-6">
                Contact us to secure your sponsorship and be part of the most
                exclusive networking event of EthCC week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-neutral-300">
                    partner@backersstage.com
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-neutral-500">TG:</span>
                  <Link
                    href="https://t.me/theatharvshrivastava"
                    target="_blank"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    @theatharvshrivastava
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Event Details</h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
              Everything you need to know about the Founder × VC Happy Hour.
            </p>
            <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="custom-card p-6 text-center group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500">
              <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                Date
              </h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                Monday, June 30, 2025
              </p>
            </div>

            <div className="custom-card p-6 text-center group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500">
              <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                Time
              </h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                4:30 PM - 5:30 PM GMT+2
              </p>
            </div>

            <div className="custom-card p-6 text-center group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500">
              <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                Venue
              </h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                Le Roof at Five Seas Hotel
              </p>
            </div>

            <div className="custom-card p-6 text-center group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500">
              <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                Format
              </h3>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                Invite-Only Networking
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                >
                  <Link href="https://lu.ma/n62kou2w" target="_blank">
                    <span className="relative z-10 flex items-center">
                      Register on Luma
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="relative overflow-hidden group"
                >
                  <Link href="/events/cannes-2025">
                    <span className="relative z-10">Back to Demo Day</span>
                    <span className="absolute inset-0 bg-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
