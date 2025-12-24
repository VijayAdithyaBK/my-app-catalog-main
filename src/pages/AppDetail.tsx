import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useExcelApp } from '@/hooks/useExcelApps';
import { Header } from '@/components/Header';
import { StatusBadge } from '@/components/StatusBadge';
import { TypeBadge } from '@/components/TypeBadge';
import { TechStackBadge } from '@/components/TechStackBadge';
import { FeedbackForm } from '@/components/FeedbackForm';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar, 
  CheckCircle2,
  Clock,
  FileCode,
  Loader2,
  Image
} from 'lucide-react';

const AppDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: app, isLoading, error } = useExcelApp(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </main>
      </div>
    );
  }

  if (error || !app) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">App Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The requested application does not exist in the catalog.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border bg-primary text-primary-foreground font-medium hover:shadow-sm transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Catalog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{app.name} - DevCatalog</title>
        <meta name="description" content={app.shortDescription} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container py-8">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Catalog
          </Link>

          {/* App Header */}
          <div className="border-2 border-border p-6 mb-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <TypeBadge type={app.type} />
                <StatusBadge status={app.status} />
              </div>
              <div className="flex items-center gap-2">
                {app.githubUrl && (
                  <a
                    href={app.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 border-2 border-border text-sm font-mono hover:bg-secondary transition-all"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
                {app.liveUrl && (
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 border-2 border-border bg-primary text-primary-foreground text-sm font-mono hover:shadow-sm transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-2">{app.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{app.shortDescription}</p>

            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Created {app.createdAt.split('T')[0]}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Updated {app.updatedAt.split('T')[0]}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Screenshots */}
              {app.screenshots && app.screenshots.length > 0 && (
                <section className="border-2 border-border p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Image className="h-5 w-5" />
                    Screenshots
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {app.screenshots.map((screenshot, index) => (
                      <a
                        key={index}
                        href={screenshot.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border-2 border-border hover:border-primary transition-colors"
                      >
                        <img
                          src={screenshot.url}
                          alt={screenshot.alt}
                          className="w-full h-40 object-cover"
                        />
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* Description */}
              <section className="border-2 border-border p-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5" />
                  About
                </h2>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <h3 className="font-bold text-muted-foreground mb-1">What it does</h3>
                    <p>{app.fullDescription}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-muted-foreground mb-1">Problem it solves</h3>
                    <p>{app.problemSolved}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-muted-foreground mb-1">Why it exists</h3>
                    <p>{app.whyItExists}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-muted-foreground mb-1">How it was built</h3>
                    <p>{app.howItWasBuilt}</p>
                  </div>
                </div>
              </section>

              {/* Features */}
              {app.features && app.features.length > 0 && (
                <section className="border-2 border-border p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Features
                  </h2>
                  <ul className="space-y-2">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary font-bold">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Architecture Notes */}
              {app.architectureNotes && (
                <section className="border-2 border-border p-6">
                  <h2 className="text-lg font-bold mb-4">Architecture Notes</h2>
                  <p className="text-sm font-mono bg-secondary p-4">
                    {app.architectureNotes}
                  </p>
                </section>
              )}

              {/* Upcoming Features */}
              {app.upcomingFeatures && app.upcomingFeatures.length > 0 && (
                <section className="border-2 border-border p-6">
                  <h2 className="text-lg font-bold mb-4">Upcoming Features</h2>
                  <ul className="space-y-2">
                    {app.upcomingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="font-bold">○</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Feedback Form */}
              <FeedbackForm appId={app.id} appName={app.name} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <section className="border-2 border-border p-6">
                <h2 className="text-lg font-bold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {app.techStack.map((tech) => (
                    <TechStackBadge key={tech} tech={tech} />
                  ))}
                </div>
              </section>

              {/* Quick Info */}
              <section className="border-2 border-border p-6">
                <h2 className="text-lg font-bold mb-4">Details</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-mono text-muted-foreground text-xs">TYPE</dt>
                    <dd className="font-medium capitalize">{app.type}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-muted-foreground text-xs">STATUS</dt>
                    <dd className="font-medium capitalize">{app.status.replace('-', ' ')}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-muted-foreground text-xs">CREATED</dt>
                    <dd className="font-medium">{app.createdAt.split('T')[0]}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-muted-foreground text-xs">LAST UPDATE</dt>
                    <dd className="font-medium">{app.updatedAt.split('T')[0]}</dd>
                  </div>
                </dl>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-border py-6 mt-12">
          <div className="container">
            <p className="text-xs font-mono text-muted-foreground text-center">
              DevCatalog • Built for developers • No marketing, just software
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AppDetail;
