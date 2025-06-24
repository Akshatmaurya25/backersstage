"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Zap,
  CheckCircle,
  Award,
  Layers,
  Shield,
  Mail,
  ChevronRight,
  Wine,
  CircuitBoard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";
import { InteractiveVenueMap } from "@/components/interactive-venue-map";
import { AddToCalendar } from "@/components/add-to-calendar";
import { EventReminder } from "@/components/event-reminder";

export default function CannesEventPage() {
  // What to Expect section
  const [activeTab, setActiveTab] = useState(0);
  const expectRef = useRef<HTMLDivElement>(null);

  // Auto-rotate tabs
  const eventDate = new Date("2025-06-29T16:00:00");
  const expectTabs = [
    {
      title: "Builder Showcases",
      icon: Layers,
      color: "from-emerald-500/20 to-emerald-500/5",
      items: [
        "AI-integrated infra",
        "Cross-chain data layers",
        "ZK + ML privacy rails",
        "Next-gen L2 development frameworks",
      ],
    },
    {
      title: "Non-dilutive Capital",
      icon: Award,
      color: "from-amber-500/20 to-amber-500/5",
      description: "Up to $50K in grants for promising projects",
    },
    {
      title: "Targeted Intros",
      icon: Users,
      color: "from-blue-500/20 to-blue-500/5",
      description: "VCs aligned by sector & thesis (potential up to $150K)",
    },
    {
      title: "Expert Mentorship",
      icon: Shield,
      color: "from-purple-500/20 to-purple-500/5",
      description:
        "Hands-on from protocol engineers, token architects & GTM leaders",
    },
  ];

  // Venue Information section
  const [activeInfoTab, setActiveInfoTab] = useState<"map" | "info" | "travel">(
    "map"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/cannes-event-bg.png"
            alt="Cannes Event Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
          <div className="noise" />
        </div>

        <div className="container-xl relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  June 29, 2025 | 4:00 PM – 7:30 PM
                </span>
              </div>
            </div>

            <h1 className="heading-xl mb-6">
              BackersStage:{" "}
              <span className="text-gradient">Founder-Powered</span> Demo Day
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-accent" />
                {/* <span className="text-sm">Cannes, France</span> */}
                <span className="text-sm">TBA</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm">100+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-neutral-800/50 backdrop-blur-sm">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm">Aligned with ETHCC [8] Week</span>
              </div>
            </div>

            <p className="body-lg text-neutral-300 mb-10 max-w-3xl mx-auto">
              A high-signal showcase for technical founders building
              foundational Web3 infrastructure. From zero-knowledge applications
              to next-gen L2s and AI x crypto, we're curating the kind of
              builders VCs actually want to back — no fluff, just real products
              and real traction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="https://lu.ma/user/BackersStage">
                  Apply to Pitch
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="mailto:partner@backersstage.com">
                  Become a Sponsor
                </Link>
              </Button> */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col  gap-4 justify-center"
              >
                <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-0">
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                    >
                      <Link target="_blank" href="https://lu.ma/1cpw5eaj">
                        <span className="relative z-10">Apply to Pitch</span>
                        <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  </MagneticButton>

                  {/* New Event Reminder Button */}
                  <EventReminder
                    eventName="BackersStage: Founder-Powered Demo Day"
                    eventDate={eventDate}
                    eventLocation="Espace Croisette, Cannes, France"
                    size="lg"
                    variant="outline"
                  />

                  {/* Add to Calendar Button */}
                  <AddToCalendar
                    eventName="BackersStage: Founder-Powered Demo Day"
                    eventDescription="A high-signal showcase for technical founders building foundational Web3 infrastructure."
                    eventLocation="Espace Croisette, Cannes, France"
                    startDate={eventDate}
                    endDate={
                      new Date(eventDate.getTime() + 3.5 * 60 * 60 * 1000)
                    } // 3.5 hours later
                    size="lg"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Add Venue Map Button */}
                  {/* <Button asChild size="lg" variant="outline">
                    <Link href="/events/cannes-2025/venue">
                      <MapPin className="mr-2 h-4 w-4" />
                      View Venue Map
                    </Link>
                  </Button> */}

                  {/* Add Happy Hour Button */}
                  <Button
                    asChild
                    size="lg"
                    className="mx-auto "
                    variant="secondary"
                  >
                    <Link href="/events/cannes-2025/happy-hour">
                      <Wine className="mr-2 h-4 w-4" />
                      Happy Hour Event
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Venue Information</h2>
            <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
              Explore the venue layout and essential information for
              BackersStage: Founder-Powered Demo Day.
            </p>
            <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
          </div>

         
          <div className="flex border-b border-neutral-800 mb-8">
            <button
              className={`px-4 py-2 font-medium text-sm relative ${
                activeInfoTab === "map"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
              onClick={() => setActiveInfoTab("map")}
            >
              Venue Map
              {activeInfoTab === "map" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm relative ${
                activeInfoTab === "info"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
              onClick={() => setActiveInfoTab("info")}
            >
              Event Information
              {activeInfoTab === "info" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
           
          </div>


          <div className="mb-16">
            {activeInfoTab === "map" && (
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                <InteractiveVenueMap className="w-full h-[650px]" />
                <div className="space-y-6">
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Venue Layout</h3>
                    <p className="text-neutral-300">
                      The Canopy by Hilton Cannes venue features dedicated areas
                      for presentations, networking, and private meetings.
                    </p>
              
                  </div>
                </div>
              </div>
            )}

            {activeInfoTab === "info" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      About Canopy by Hilton Cannes
                    </h3>
                    <p className="text-neutral-300 mb-4">
                      Canopy by Hilton Cannes is a premier event venue located
                      in the heart of Cannes, France. Known for its elegant
                      design and versatile spaces, it regularly hosts
                      high-profile events during major Cannes festivals and
                      conferences.
                    </p>
                    <p className="text-neutral-300">
                      For the BackersStage Demo Day, we've configured the space
                      to maximize networking opportunities while providing
                      dedicated areas for demos, presentations, and private
                      meetings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Venue Facilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        {
                          title: "High-Speed WiFi",
                          description:
                            "Enterprise-grade connectivity throughout the venue",
                        },
                        {
                          title: "AV Equipment",
                          description:
                            "Professional sound and projection systems",
                        },
                        {
                          title: "Catering",
                          description: "Premium refreshments and beverages",
                        },
                        {
                          title: "Accessibility",
                          description:
                            "Wheelchair accessible entrances and facilities",
                        },
                        {
                          title: "Security",
                          description:
                            "Professional security staff and controlled access",
                        },
                        {
                          title: "Technical Support",
                          description:
                            "On-site tech team for presenters and demos",
                        },
                      ].map((facility, i) => (
                        <div
                          key={i}
                          className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-4"
                        >
                          <h4 className="font-medium mb-1">{facility.title}</h4>
                          <p className="text-sm text-neutral-400">
                            {facility.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Event Schedule</h3>
                    <div className="space-y-4">
                      {[
                        {
                          time: "4:00 PM - 4:30 PM",
                          title: "Registration & Welcome",
                          description:
                            "Check-in, badge collection, and welcome refreshments",
                        },
                        {
                          time: "4:30 PM - 4:45 PM",
                          title: "Opening Remarks",
                          description: "Introduction and event overview",
                        },
                        {
                          time: "4:45 PM -  PM",
                          title: "Builder Showcases",
                          description:
                            "Technical demonstrations from selected projects",
                        },
                        {
                          time: "6:00 PM - 6:45 PM",
                          title: "Panel Discussion",
                          description:
                            "Industry experts discuss the future of Web3 infrastructure",
                        },
                        {
                          time: "6:45 PM - 8:00 PM",
                          title: "Networking Reception",
                          description:
                            "Connect with founders, investors, and industry leaders",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex border-l-2 border-accent pl-4"
                        >
                          <div className="w-32 flex-shrink-0">
                            <div className="text-sm font-medium">
                              {item.time}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-neutral-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="sticky top-24 space-y-6">
                    <div className="rounded-xl overflow-hidden bg-neutral-800">
                  
                    </div>

                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">
                        Contact Information
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-neutral-400">
                            Address
                          </div>
                          <div>Canopy by Hilton Cannes, Cannes, France</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-400">
                            Event Contact
                          </div>
                          <div>events@backersstage.com</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-400">
                            Emergency Contact
                          </div>
                          <div>+33 (0) 123 456 789</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button asChild className="w-full">
                          <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Open in Google Maps
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>
      </section> */}

      {/* Proven Format Section */}
      <section className="py-16">
        <div className="container-lg">
          <div className="animate-on-scroll  translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Proven Format, Ready to Scale</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                Our last execution during Token2049 was successfully held with
                the help of Near Foundation, Camp Network, Atlassoit Secruity
                and other partners.
              </p>
              <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-100 relative rounded-lg overflow-hidden group">
              <Image
                src="https://ik.imagekit.io/d2v6okduo/PXL_20250429_130050697_2_.jpg?updatedAt=1747558918658"
                alt="Dubai Event"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Dubai Validated the Model
                </h3>
                <p className="text-neutral-200">
                  Token2049 Dubai Demo Day Success
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-200">
                <h3 className="text-3xl font-bold mb-8">Key Outcomes:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="custom-card p-6 relative z-10 border border-accent/20 hover:border-accent/40 transition-colors duration-500">
                      <div className="text-4xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-500 origin-left">
                        500+
                      </div>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500">
                        Total Registrations
                      </p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="custom-card p-6 relative z-10 border border-accent/20 hover:border-accent/40 transition-colors duration-500">
                      <div className="text-4xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-500 origin-left">
                        50+
                      </div>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500">
                        VCs & Angels Engaged
                      </p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="custom-card p-6 relative z-10 border border-accent/20 hover:border-accent/40 transition-colors duration-500">
                      <div className="text-4xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-500 origin-left">
                        100+
                      </div>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500">
                        Projects Applied
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" translate-y-8 transition-all duration-1000 delay-300">
                <ul className="space-y-4">
                  {[
                    "Projects pitched to full rooms — some even landed main stage spots.",
                    "Sponsors reported strong lead flow + ROI.",
                    "Media mentions across multiple outlets.",
                    "Now we're evolving it for ETHCC — with even tighter curation.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:bg-accent/40 transition-colors duration-300">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section - REDESIGNED */}
      <section
        ref={expectRef}
        className="section-padding bg-neutral-900/30 overflow-hidden"
      >
        <div className="container-lg">
          <div className=" translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">What to Expect in Cannes</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                This is not just a pitch event. It's a working session between
                projects, protocols, and capital.
              </p>
              <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Tab Navigation */}
            <div className="lg:col-span-4 translate-y-8 transition-all duration-1000 delay-100">
              <div className="sticky top-24 space-y-2">
                {expectTabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-500 flex items-center space-x-4 group ${
                      activeTab === index
                        ? "bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30"
                        : "bg-neutral-800/50 hover:bg-neutral-800/80 border border-neutral-800"
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeTab === index
                          ? "bg-accent/20 text-accent"
                          : "bg-neutral-700/50 text-neutral-400"
                      }`}
                    >
                      <tab.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4
                        className={`font-bold transition-colors duration-300 ${
                          activeTab === index
                            ? "text-accent"
                            : "text-neutral-300"
                        }`}
                      >
                        {tab.title}
                      </h4>
                      <div
                        className={`h-0.5 w-0 bg-accent transition-all duration-500 ${
                          activeTab === index ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                    <ChevronRight
                      className={`ml-auto h-5 w-5 transition-transform duration-300 ${
                        activeTab === index
                          ? "text-accent translate-x-1"
                          : "text-neutral-500"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-8  translate-y-8 transition-all duration-1000 delay-200">
              <div className="relative h-full">
                <AnimatePresence mode="wait">
                  {expectTabs.map(
                    (tab, index) =>
                      activeTab === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                          className={`bg-gradient-to-br ${tab.color} p-8 rounded-2xl border border-neutral-800 h-full`}
                        >
                          <div className="flex items-center mb-6">
                            <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                              <tab.icon className="h-8 w-8 text-accent" />
                            </div>
                            <h3 className="heading-sm text-accent">
                              {tab.title}
                            </h3>
                          </div>

                          {index === 0 ? (
                            <div className="space-y-6">
                              <p className="text-xl text-neutral-300 mb-6">
                                Selected teams will demo new approaches in
                                cutting-edge Web3 technologies:
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tab.items?.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.5,
                                      delay: i * 0.1,
                                    }}
                                    className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-lg border border-neutral-800/80 flex items-center space-x-3 group hover:border-accent/30 transition-colors duration-300"
                                  >
                                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                      <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-0.5 transition-transform duration-300" />
                                    </div>
                                    <span className="text-neutral-300 font-medium group-hover:text-white transition-colors duration-300">
                                      {item}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-6">
                              <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 to-transparent rounded-xl blur-xl opacity-50"></div>
                                <div className="relative bg-neutral-900/70 backdrop-blur-md p-6 rounded-xl border border-neutral-800">
                                  <p className="text-xl text-neutral-200 leading-relaxed">
                                    {tab.description}
                                  </p>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-lg border border-neutral-800/80 group hover:border-accent/30 transition-colors duration-300">
                                  <h4 className="font-bold text-accent mb-2">
                                    Selection Criteria
                                  </h4>
                                  <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                                    Technical excellence and working prototypes
                                  </p>
                                </div>
                                <div className="bg-neutral-900/50 backdrop-blur-md p-4 rounded-lg border border-neutral-800/80 group hover:border-accent/30 transition-colors duration-300">
                                  <h4 className="font-bold text-accent mb-2">
                                    Application Process
                                  </h4>
                                  <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                                    Curated selection with technical review
                                  </p>
                                </div>
                              </div>

                              <div className="flex justify-end mt-4">
                                {/* { <Button
                                  asChild
                                  className="bg-accent/20 hover:bg-accent/30 text-accent border border-accent/30"
                                >
                                  <Link
                                    href={
                                      !tab.link
                                        ? `https://lu.ma/user/BackersStage`
                                        : tab.link
                                    }
                                    target="_blank"
                                    className="flex items-center"
                                  >
                                    <span>Apply Now</span>
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>} */}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )
                  )}
                </AnimatePresence>

                {/* Decorative elements */}
                <div className="absolute -bottom-20 -right-20 h-40 w-40 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 h-20 w-20 bg-accent/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Interactive 3D-like cards */}
          {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll  translate-y-8 transition-all duration-1000 delay-300">
            <div className="relative group perspective">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-xl  group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-6 rounded-xl group-hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transform transition-all duration-500 group-hover:rotate-y-10 group-hover:-rotate-x-10">
                <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Event Schedule
                </h3>
                <p className="text-neutral-400 mb-4">
                  A full day of demos, networking, and targeted introductions.
                </p>
                <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="relative group perspective">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-xl  group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-6 rounded-xl group-hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transform transition-all duration-500 group-hover:rotate-y-10 group-hover:-rotate-x-10">
                <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Premium Venue
                </h3>
                <p className="text-neutral-400 mb-4">
                  Canopy by Hilton Cannes provides an elegant setting for
                  meaningful connections.
                </p>
                <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="relative group perspective">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-xl blur-xl  group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-6 rounded-xl group-hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transform transition-all duration-500 group-hover:rotate-y-10 group-hover:-rotate-x-10">
                <div className="mb-4 text-accent bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Exclusive Access
                </h3>
                <p className="text-neutral-400 mb-4">
                  Limited spots ensure quality interactions and meaningful
                  connections.
                </p>
                <div className="h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Partnership Options Section */}
      <section id="sponsor" className="py-16">
        <div className="container-lg">
          <div className="animate-on-scroll  translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Partnership Options</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                Join us as a sponsor and connect with the most promising Web3
                founders and projects.
              </p>
              <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Title Sponsor */}
            <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-100">
              <div className="custom-card p-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500 border-2 border-accent h-full">
                <div className="absolute top-0 right-0">
                  <div className="bg-accent text-accent-foreground px-4 py-1 font-medium">
                    Premium
                  </div>
                </div>

                <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Award className="h-7 w-7" />
                </div>

                <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors duration-300">
                  Title Sponsor
                </h3>
                <div className="text-3xl font-display font-bold text-accent mb-6">
                  $9,000
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Branded as Presented by [Your Name]",
                    "Keynote stage time",
                    "Premium booth + logo on all major signage",
                    "Full access to curated founder–VC 1:1 lounge",
                    "Media coverage and recap mentions",
                    "Private access to team decks pre-event",
                    "15 VIP passes",
                    "Co-host the Premium Founder x VC Happy Hour",
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
                      <span className="relative z-10">
                        Become Title Sponsor
                      </span>
                      <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Ecosystem Partner */}
            <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-200">
              <div className="custom-card p-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500 h-full">
                <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-7 w-7" />
                </div>

                <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors duration-300">
                  Ecosystem Partner
                </h3>
                <div className="text-3xl font-display font-bold text-accent mb-6">
                  $3,000
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Panel speaking opportunity",
                    "Logo on website and printed materials",
                    "Access to top 15 teams",
                    "4 VIP passes",
                    "Brand featured at Premium Happy Hour",
                    "5+ shoutouts across pre/post content",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start group/item">
                      <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-accent/30 transition-colors duration-300">
                        <CheckCircle className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-neutral-300 group-hover:item:text-white transition-colors duration-300">
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

            {/* Custom */}
            <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-300">
              <div className="custom-card p-8 relative overflow-hidden group hover:shadow-[0_0_25px_rgba(130,255,165,0.15)] transition-all duration-500 h-full">
                <div className="mb-6 text-accent bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {/* <Zap className="h-7 w-7" /> */}
                  <CircuitBoard className="h-7 w-7" />
                </div>

                <h3 className="heading-sm mb-2 group-hover:text-accent transition-colors duration-300">
                  Custom
                </h3>
                <div className="text-3xl font-display font-bold text-accent mb-6">
                  Starting $999
                </div>

                <p className="text-neutral-400 mb-8 group-hover:text-neutral-300 transition-colors duration-300">
                  Want a branded lounge? Curated roundtable? Branded reports?
                  Let's talk.
                </p>

                <div className="flex items-center space-x-2 mb-8">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                    partner@backersstage.com
                  </span>
                </div>

                <MagneticButton>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full relative overflow-hidden group"
                  >
                    <Link href="mailto:partner@backersstage.com">
                      <span className="relative z-10">Contact Us</span>
                      <span className="absolute inset-0 bg-accent/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BackersStage Section */}
      <section className="section-padding bg-neutral-900/30">
        <div className="container-lg">
          <div className="animate-on-scroll  translate-y-8 transition-all duration-1000">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">About BackersStage</h2>
              <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
                BackersStage exists to close the loop between early-stage
                founders and the technical capital they need.
              </p>
              <div className="h-1 w-16 bg-accent mt-6 mx-auto" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                "Curate high-context Demo Days and Pitch Rounds",
                "Source ecosystem grants and validator-level support",
                "Connect builders to domain-specific advisors (infra, token models, cryptoeconomics)",
                "Enable warm intros based on actual build relevance — not just hype",
              ].map((item, i) => (
                <div
                  key={i}
                  className="animate-on-scroll  translate-y-8 transition-all duration-1000"
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="custom-card p-6 hover-lift group">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-neutral-300 text-lg group-hover:text-white transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 animate-on-scroll  translate-y-8 transition-all duration-1000 delay-600">
              <p className="text-neutral-400">
                We've supported 5+ projects across global hackathons, VC
                workshops, and private pitch days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section id="apply" className="section-padding gradient-border">
        <div className="bg-neutral-900">
          <div className="container-lg py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="animate-on-scroll  translate-y-8 transition-all duration-1000">
                <h2 className="heading-lg mb-6">Let's Build Together</h2>
              </div>

              <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-100">
                <p className="text-xl text-neutral-300 mb-8">
                  Partner with us if you want:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "High-quality dealflow",
                  "Technical teams, not tourist projects",
                  "Early access to builders solving infrastructure bottlenecks",
                  "Visible alignment with quality during ETHCC week",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="animate-on-scroll  translate-y-8 transition-all duration-1000"
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3 p-4 rounded-lg bg-neutral-800/50 group hover:bg-neutral-800/80 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-neutral-200 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-on-scroll  translate-y-8 transition-all duration-1000 delay-600">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Button
                      asChild
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
                    >
                      <Link
                        href="https://lu.ma/user/BackersStage"
                        target="_blank"
                      >
                        <span className="relative z-10">Apply to Pitch</span>
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
                      <Link href="mailto:partner@backersstage.com">
                        <span className="relative z-10">Become a Sponsor</span>
                        <span className="absolute inset-0 bg-accent/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Venue Information Section */}
    </>
  );
}
