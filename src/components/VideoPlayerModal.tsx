import React from 'react';
import { X } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoId?: string;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-brand-navy rounded-sm max-w-4xl w-full overflow-hidden shadow-2xl border border-gray-800 relative">
        
        {/* Header */}
        <div className="p-4 bg-brand-navyCard border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <h4 className="font-heading font-black text-sm uppercase text-white tracking-wide truncate max-w-lg">
              {title || "Corporate & Facility Video Showcase"}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=0"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer info */}
        <div className="p-4 bg-brand-navyCard text-xs text-gray-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-gray-800">
          <div>
            <strong className="text-white">Rappid Valves (India) Limited</strong> — Precision Machining, Hydrostatic Test Labs & Automated Assembly.
          </div>
          <button
            onClick={onClose}
            className="text-xs font-bold text-brand-red hover:underline"
          >
            Close Video
          </button>
        </div>

      </div>
    </div>
  );
};
