import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ProjectsProvider } from "@/components/ProjectsProvider";
import { getProfilePhoto, getProjectCovers, getResumeFile } from "@/lib/assets";

export default function Home() {
  const photo = getProfilePhoto();
  const covers = getProjectCovers();
  const resume = getResumeFile();

  return (
    <ProjectsProvider covers={covers}>
      <Navbar />
      <main className="flex-1">
        <Hero photo={photo} />
        <ProjectsCarousel />
        <About photo={photo} />
        <Projects />
        <Resume resume={resume} />
        <Contact />
      </main>
      <Footer />
    </ProjectsProvider>
  );
}
