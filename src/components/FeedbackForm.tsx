import { useState } from 'react';
import { Bug, Lightbulb, MessageCircle, Star, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface FeedbackFormProps {
  appId: string;
  appName: string;
}

type FeedbackType = 'bug' | 'feature' | 'general';

const FEEDBACK_EMAIL = 'your-email@example.com'; // Replace with your email

export const FeedbackForm = ({ appId, appName }: FeedbackFormProps) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('general');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const feedbackTypes: { value: FeedbackType; label: string; icon: React.ElementType }[] = [
    { value: 'bug', label: 'Bug Report', icon: Bug },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb },
    { value: 'general', label: 'General Feedback', icon: MessageCircle },
  ];

  const getTypeLabel = (type: FeedbackType) => {
    switch (type) {
      case 'bug': return 'Bug Report';
      case 'feature': return 'Feature Request';
      case 'general': return 'General Feedback';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      toast.error('Please fill in the title and description');
      return;
    }

    // Build email subject
    const subject = `[${getTypeLabel(feedbackType)}] ${appName}: ${title.trim()}`;

    // Build email body
    let body = `App: ${appName}\n`;
    body += `App ID: ${appId}\n`;
    body += `Feedback Type: ${getTypeLabel(feedbackType)}\n`;
    if (feedbackType === 'general' && rating > 0) {
      body += `Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)\n`;
    }
    body += `\n---\n\n`;
    body += `Title: ${title.trim()}\n\n`;
    body += `Description:\n${description.trim()}\n`;

    // Create mailto URL
    const mailtoUrl = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoUrl;

    toast.success('Opening your email client...');
  };

  return (
    <section className="border-2 border-border p-6">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
        <MessageCircle className="h-5 w-5" />
        Submit Feedback
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Feedback Type */}
        <div>
          <label className="block text-xs font-mono font-bold text-muted-foreground mb-2">
            FEEDBACK TYPE
          </label>
          <div className="flex flex-wrap gap-2">
            {feedbackTypes.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setFeedbackType(value)}
                className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-mono border-2 transition-all ${
                  feedbackType === value
                    ? 'border-border bg-primary text-primary-foreground'
                    : 'border-transparent bg-secondary hover:border-border'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-xs font-mono font-bold text-muted-foreground mb-2">
            TITLE *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={
              feedbackType === 'bug' 
                ? 'Brief description of the issue'
                : feedbackType === 'feature'
                ? 'What feature would you like?'
                : 'What would you like to share?'
            }
            className="w-full px-3 py-2 border-2 border-border bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-xs font-mono font-bold text-muted-foreground mb-2">
            DESCRIPTION *
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={
              feedbackType === 'bug'
                ? 'Steps to reproduce, expected vs actual behavior...'
                : feedbackType === 'feature'
                ? 'Why do you need this? How would it work?'
                : 'Share your thoughts, suggestions, or comments...'
            }
            rows={4}
            className="w-full px-3 py-2 border-2 border-border bg-background text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            required
          />
        </div>

        {/* Rating (for general feedback) */}
        {feedbackType === 'general' && (
          <div>
            <label className="block text-xs font-mono font-bold text-muted-foreground mb-2">
              RATING (OPTIONAL)
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`h-6 w-6 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-primary text-primary'
                        : 'text-muted-foreground'
                    }`}
                  />
                </button>
              ))}
              {rating > 0 && (
                <button
                  type="button"
                  onClick={() => setRating(0)}
                  className="text-xs font-mono text-muted-foreground ml-2 hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border bg-primary text-primary-foreground font-medium hover:shadow-sm transition-all"
        >
          <Mail className="h-4 w-4" />
          Send via Email
        </button>

        <p className="text-xs text-muted-foreground">
          This will open your email client with the feedback details pre-filled.
        </p>
      </form>
    </section>
  );
};
