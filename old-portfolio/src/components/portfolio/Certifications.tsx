import { Section } from "./Section";
import { Award, Download, FileText } from "lucide-react";

const certs = [
  { 
    name: "Google Cloud Career Launchpad — Cloud Engineer Track", 
    issuer: "Google Cloud", 
    file: "/certificates/google cloud.pdf" 
  },
  { 
    name: "Object-Oriented Programming", 
    issuer: "NPTEL", 
    file: "/certificates/Fundamentals of Object Oriented Programming.pdf" 
  },
  { 
    name: "Data Structures & Algorithms using Java", 
    issuer: "NPTEL", 
    file: "/certificates/Data Structure and Algorithms using Java (1).pdf" 
  },
   { 
    name: "The Joy Of Computing Using Python", 
    issuer: "NPTEL", 
    file: "/certificates/Python.pdf" 
  },
 
  { 
    name: "German", 
    issuer: "NPTEL", 
    file: "/certificates/German - I.pdf" 
  },
  
  { 
    name: "Kaggle Hackathon - 4th position", 
    issuer: "Kaggle", 
    file: "/certificates/Hackathon.pdf" 
  },
  { 
    name: "Student Council Member", 
    issuer: "Poornima Institute of Engineering and Technology", 
    file: "/certificates/Student Council.pdf" 
  }
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
    >
      {/* Changed to 1 column on mobile, 2 on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certs.map((c, i) => (
          <a
            key={i}
            href={c.file}
            target="_blank"
            rel="noopener noreferrer"
            /* 
               FIX: Added 'flex-wrap' and changed 'items-center' to 'items-start' 
               on small screens so the button can drop down if needed.
            */
            className="group bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-row items-center gap-4 md:gap-5 hover:border-accent transition-colors"
          >
            <span className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 md:w-6 md:h-6" />
            </span>
            
            <div className="flex-1 min-w-0">
              {/* 
                  FIX: Removed 'truncate' and added 'line-clamp-2' 
                  so long titles like "Google Cloud..." don't just disappear.
              */}
              <h3 className="font-display text-lg md:text-xl leading-tight line-clamp-2">{c.name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground truncate mt-1">
                {c.issuer}
              </p>
            </div>

            {/* 
                FIX: Added 'hidden sm:inline-flex' to hide the text "PDF" 
                on very small screens to save space, or just keep the icon.
            */}
            <span className="inline-flex items-center gap-1.5 text-xs md:text-sm px-3 py-2 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-colors shrink-0">
              <Download className="w-3.5 h-3.5 md:w-4 h-4" /> 
              <span className="hidden xs:block">PDF</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 bg-foreground text-background rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <FileText className="w-6 h-6 text-accent shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl md:text-2xl">All certificates in one place</h3>
            <p className="text-background/70 text-sm mt-1 max-w-md">
              Download a single zip file containing all my academic and professional certifications.
            </p>
          </div>
        </div>
        <a
          href="/certificates/certificates (2).zip"
          download
          className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" /> Download all (.zip)
        </a>
      </div>
    </Section>
  );
}
