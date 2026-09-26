import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  location?: string;
  description: string;
};

const teamMembers: TeamMember[] = [
  {
    slug: "rajdev-kumar",
    name: "Rajdev Kumar",
    role: "Strategic Partner",
    image: "/team/rajdev.PNG",
    description:
      "Rajdev Kumar is a Strategic Partner at Bhadagadi, supporting the company as an Investor and Business Growth Advisor.",
  },
  {
    slug: "shezar-khatri",
    name: "Shezar Khatri",
    role: "Managing Director",
    image: "/team/shezar.PNG",
    description:
      "Shezar Khatri serves as the Managing Director of Bhadagadi, India's Next Generation Taxi Platform.",
  },
  {
    slug: "vivek-anand",
    name: "Vivek Anand",
    role: "Founder",
    image: "/team/Vivek.PNG",
    description:
      "Vivek Anand is a Founder of Bhadagadi, India's Next Generation Taxi Platform.",
  },
  {
    slug: "gulshan-malhotra",
    name: "Gulshan Malhotra",
    role: "Founder",
    image: "/team/Gulshan.PNG",
    description:
      "Gulshan Malhotra is a Founder of Bhadagadi, India's Next Generation Taxi Platform.",
  },
  {
    slug: "siddhant-khanna",
    name: "Siddhant Khanna",
    role: "State Head",
    image: "/team/Siddhant.PNG",
    description:
      "Siddhant Khanna serves as a State Head at Bhadagadi, India's Next Generation Taxi Platform.",
  },
  {
    slug: "divya-anand",
    name: "Divya Anand",
    role: "Emergency Response & SOS Support Manager",
    image: "/team/divya.PNG",
    description:
      "Divya Anand serves as Emergency Response and SOS Support Manager at Bhadagadi.",
  },
  {
    slug: "suriyansh-kumar",
    name: "Suriyansh Kumar",
    role: "Chief Business Operations Manager",
    image: "/team/Suriyansh.PNG",
    description:
      "Suriyansh Kumar serves as Chief Business Operations Manager at Bhadagadi.",
  },
  {
    slug: "pawan-kumar",
    name: "Pawan Kumar",
    role: "Head of Safety & Emergency Response",
    image: "/team/Pawan.PNG",
    description:
      "Pawan Kumar serves as Head of Safety and Emergency Response at Bhadagadi.",
  },
  {
    slug: "gaurav-kumar-pal",
    name: "Gaurav Kumar Pal",
    role: "Customer Relations & Complaint Resolution Manager",
    image: "/team/Gaurav.PNG",
    description:
      "Gaurav Kumar Pal serves as Customer Relations and Complaint Resolution Manager at Bhadagadi.",
  },
  {
    slug: "suraj-raj",
    name: "Suraj Raj",
    role: "Training & Inventory Operations Manager",
    image: "/team/Suraj.PNG",
    description:
      "Suraj Raj serves as Training and Inventory Operations Manager at Bhadagadi.",
  },
  {
    slug: "saurav-raj",
    name: "Saurav Raj",
    role: "Training & Learning Development Manager",
    image: "/team/Saurav.PNG",
    description:
      "Saurav Raj serves as Training and Learning Development Manager at Bhadagadi.",
  },
  {
    slug: "ajit-kumar-keshari",
    name: "Ajit Kumar Keshari",
    role: "Product Manager",
    image: "/team/Ajit.PNG",
    description:
      "Ajit Kumar Keshari serves as Product Manager at Bhadagadi.",
  },
  {
    slug: "lokesh-anand",
    name: "Lokesh Anand",
    role: "Jehanabad Head",
    image: "/team/lokesh.PNG",
    location: "JEHANABAD",
    description:
      "Lokesh Anand serves as Jehanabad Head for Bhadagadi.",
  },
  {
    slug: "kumar-aditya",
    name: "Kumar Aditya",
    role: "Jharkhand Head",
    image: "/team/aditya.PNG",
    location: "JHARKHAND",
    description:
      "Kumar Aditya serves as Jharkhand Head for Bhadagadi.",
  },
  {
    slug: "amit-sahani",
    name: "Amit Sahani",
    role: "Gaya Head",
    image: "/team/amit.PNG",
    location: "GAYA",
    description:
      "Amit Sahani serves as Gaya Head for Bhadagadi.",
  },
];

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    return {
      title: "Team Member | Bhadagadi",
    };
  }

  return {
    title: `${member.name} | ${member.role} | Bhadagadi`,
    description: `${member.name} is associated with Bhadagadi. ${member.description}`,
    alternates: {
      canonical: `/team/${member.slug}`,
    },
    openGraph: {
      title: `${member.name} | ${member.role} | Bhadagadi`,
      description: member.description,
      url: `https://bhadagadi.in/team/${member.slug}`,
      siteName: "Bhadagadi",
      type: "profile",
      locale: "en_IN",
      images: [
        {
          url: `https://bhadagadi.in${member.image}`,
          alt: `${member.name} - Bhadagadi`,
        },
      ],
    },
  };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = teamMembers.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  const profileUrl = `https://bhadagadi.in/team/${member.slug}`;
  const imageUrl = `https://bhadagadi.in${member.image}`;

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${member.name} | Bhadagadi`,
    url: profileUrl,
    mainEntity: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      image: imageUrl,
      url: profileUrl,
      worksFor: {
        "@type": "Organization",
        name: "Bhadagadi",
        url: "https://bhadagadi.in",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema),
        }}
      />

      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          padding: "90px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#FFC107",
              textDecoration: "none",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "45px",
            }}
          >
            ← Back to Bhadagadi
          </Link>

          <section
            style={{
              background: "#111",
              border: "1px solid #292929",
              borderRadius: "28px",
              padding: "45px",
              display: "flex",
              gap: "45px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "260px",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                border: "2px solid #FFC107",
                flexShrink: 0,
              }}
            >
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role} at Bhadagadi`}
                fill
                sizes="220px"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "280px" }}>
              <p
                style={{
                  color: "#FFC107",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                BHADAGADI TEAM
              </p>

              <h1
                style={{
                  fontSize: "48px",
                  lineHeight: "1.1",
                  margin: "0 0 15px",
                  fontWeight: "800",
                }}
              >
                {member.name}
              </h1>

              <h2
                style={{
                  fontSize: "22px",
                  color: "#FFC107",
                  margin: "0 0 20px",
                  fontWeight: "700",
                }}
              >
                {member.role}
              </h2>

              {member.location && (
                <p
                  style={{
                    color: "#aaa",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    marginBottom: "20px",
                  }}
                >
                  {member.location}
                </p>
              )}

              <p
                style={{
                  color: "#bbb",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  margin: 0,
                }}
              >
                {member.description}
              </p>
            </div>
          </section>

          <section
            style={{
              marginTop: "35px",
              background: "#0b0b0b",
              border: "1px solid #222",
              borderRadius: "24px",
              padding: "35px",
            }}
          >
            <h2
              style={{
                color: "#FFC107",
                fontSize: "26px",
                marginBottom: "15px",
              }}
            >
              About Bhadagadi
            </h2>

            <p
              style={{
                color: "#aaa",
                lineHeight: "1.8",
                fontSize: "16px",
                margin: 0,
              }}
            >
              Bhadagadi is India's Next Generation Taxi Platform, connecting
              passengers and drivers with a modern, convenient and technology-
              driven transportation experience.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
