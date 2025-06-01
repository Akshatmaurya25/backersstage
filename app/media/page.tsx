import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const mediaPartners = [
  {
    image: "https://ik.imagekit.io/d2v6okduo/coin_gabbar.png",
    link: "https://x.com/coin_gabbar_",
    name: "CoinGabbar",
  },
  {
    image: "https://ik.imagekit.io/d2v6okduo/her_dao.png",
    link: "https://x.com/_HerDAO",
    name: "Her DAO",
  },
  {
    image: "https://ik.imagekit.io/d2v6okduo/b.png",
    link: "https://x.com/blockchainedind",
    name: "Blochained India",
  },
  {
    image: "https://ik.imagekit.io/d2v6okduo/logo_mark_text_light_space.png",
    link: "https://x.com/WizzHQ",
    name: "WizzHQ",
  },
  {
    image: "https://ik.imagekit.io/d2v6okduo/DAO-logo%20White.png",
    link: "https://x.com/Bhopal_DAO",
    name: "Bhopal DAO",
  },
  {
    image:
      "https://ik.imagekit.io/d2v6okduo/image%2017@3x.png?updatedAt=1747507566763",
    link: "https://x.com/AarambhLabs",
    name: "Aarambh Labs",
  },
];

const articleData = [
  {
    title: "🚀 Exciting News from CoinGabbar!",
    image: "https://pbs.twimg.com/media/Gpb0aZZasAAMOG5?format=jpg&name=medium",
    description: (
      <>
        <p>
          We're happy to be the Media Partner for the Demo Day &amp; Pitch
          Competition at TOKEN2049 Dubai! 🌟
        </p>
        <div className="my-4">
          <p>📅 Date: April 29, 2025</p>
          <p>🕒 Time: 3:30 PM – 7:00 PM</p>
          <p>📍 Location: Dubai, UAE</p>
        </div>
        <p>
          Get ready for groundbreaking pitches, innovative projects, and a
          glimpse into the future of Web3!
        </p>
        <p>Hosted by AtlassoIT with BackersStage Capital.</p>
        <p className="mt-4">Stay tuned for more updates! 🔥</p>
        <p className="mt-4">
          Visit:{" "}
          <Link
            href="https://coingabbar.com"
            className="text-accent hover:underline"
          >
            coingabbar.com
          </Link>
        </p>
      </>
    ),
    link: "https://x.com/coin_gabbar_/status/1915988172682432878?t=ak4ygCqh5I9XVCbf9iZZ6Q&s=19",
  },
  {
    title: "📢H.E.R. DAO are joining as a Community Partner",
    image: "https://pbs.twimg.com/media/GpdngnXW8AA8Np5?format=jpg&name=medium",
    description: (
      <>
        <p>Demo Day &amp; Pitch Competition during Token2049 Dubai 🔥</p>
        <p className="mt-4">
          Excited to be part of this focused builder-first, high-signal event
          connecting top Web3 founders with active investors, through curated
          pitches, 1:1 VC meetings, and meaningful conversations. 🤝
        </p>
        <div className="mt-4">
          <p>Hosted by Atlassoit | Co-hosted by Backers Stage Capital</p>
          <p>Ecosystem Partners: NEAR Foundation, Camp Network</p>
        </div>
      </>
    ),
    link: "https://x.com/_HerDAO/status/1916115253449941289?t=WuTI3JKDDst_CVaH3c8YtQ&s=19",
  },
  {
    title: "Supporting as community partners",
    image:
      "https://pbs.twimg.com/media/GpsQ4gAXAAALmJB?format=jpg&name=900x900",
    description: (
      <>
        <p>
          We are happy to be supporting as community partners for "Demo Day &
          Pitch Competition" a side event during Token2049 Dubai. It is being
          organised today from 3:30 pm (Dubai time) onwards!
        </p>
        <p className="mt-4">150+ carefully selected projects.</p>
        <div className="mt-4">
          <p>Leading VCs and investors confirmed.</p>
          <p>Focused pitching, real discussions, actionable outcomes.</p>
        </div>
        <p className="mt-4">
          Register here:{" "}
          <Link
            href="https://lu.ma/ka7540hd"
            className="text-accent hover:underline"
          >
            lu.ma/ka7540hd
          </Link>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span>@Atlassoit</span>
          <span>@BackersStage</span>
          <span>@NEARFoundation</span>
          <span>@campnetworkxyz</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-accent">
          <span>#DemoDay</span>
          <span>#PitchDay</span>
          <span>#Web3</span>
          <span>#Startups</span>
          <span>#VC</span>
          <span>#Investors</span>
        </div>
      </>
    ),
    link: "https://x.com/blockchainedind/status/1917144765268734149?t=oc3Z079afxFcUUCJPEKedg&s=19",
  },
];

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

export default function MediaPage() {
  return (
    <div className="flex flex-col min-h-screen px-8 max-w-5xl items-center w-full mx-auto">
      {/* Hero Section */}
      <section className="pt-32 bg-off-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Media Mentions</h1>
            <p className="text-xl text-muted-foreground">
              BackersStage in the press and across the web3 ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {mediaPartners.map((partner, index) => (
              <Link
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-lg flex items-center justify-center h-32 group hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {/* <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Media Mentions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articleData.map((article, i) => (
              <Link
                href={article.link}
                key={i}
                target="_blank"
                className="glass-card rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">
                      April 2025
                    </span>
                    <span className="text-sm font-medium">TOKEN2049 Dubai</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-dark-contrast/80 transition-colors">
                    {article.title}
                  </h3>
                  <div className="text-muted-foreground mb-4">
                    {React.Children.map(
                      article.description.props.children,
                      (child, index) => {
                        if (typeof child === "string") {
                          return truncateText(child, 30);
                        }
                        if (index > 1) return null; // Only show first two elements
                        return child;
                      }
                    )}
                    <span className="text-accent">...</span>
                  </div>
                  <div className="flex items-center text-dark-contrast group-hover:text-dark-contrast/80 transition-colors">
                    <span className="mr-2">Read more</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Press Kit */}
      <section className="my-12 bg-banana-cream/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Press Kit</h2>
            <p className="text-xl mb-8">
              For media inquiries or to request our press kit, please contact
              our team.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group"
            >
              <Link href="https://lu.ma/user/BackersStage" target="_blank">
                <span className="relative z-10">Media Press</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
