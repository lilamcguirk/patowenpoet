import './MediaSection.css';

const videos = [
  {
    title: 'Reading & Conversation',
    youtubeId: 'mFIWwaAA0i8',
    description: 'A reading of recent work, recorded live.',
  },
  {
    title: 'Reading & Conversation',
    youtubeId: '7XioXiOkrX4',
    description:
      'A conversation on craft, memory, and the poems that grew out of them.',
  },
];

const audio = {
  title: 'Kentucky Writers Roundtable',
  soundcloudUrl:
    'https://soundcloud.com/radiolex/kentucky-writers-roundtable-november-05-2025-pat-owen',
  description:
    'A conversation on RadioLex’s Kentucky Writers Roundtable.',
};

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12Z"
      />
    </svg>
  );
}

function SoundCloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M1.5 11.5c-.28 0-.5.22-.5.5v3.4c0 .28.22.5.5.5s.5-.22.5-.5V12c0-.28-.22-.5-.5-.5Zm2.2-1.4c-.28 0-.5.22-.5.5v5.2c0 .28.22.5.5.5s.5-.22.5-.5v-5.2c0-.28-.22-.5-.5-.5Zm2.3-.6c-.28 0-.5.22-.5.5v6.4c0 .28.22.5.5.5s.5-.22.5-.5V10c0-.28-.22-.5-.5-.5Zm2.4-.9c-.3 0-.55.25-.55.55v7.7c0 .3.25.55.55.55s.55-.25.55-.55V9.05c0-.3-.25-.55-.55-.55ZM11 8c-.33 0-.6.27-.6.6v8.3c0 .33.27.6.6.6s.6-.27.6-.6V8.6c0-.33-.27-.6-.6-.6Zm10.8 2.4a3.6 3.6 0 0 0-1.4.28 4.9 4.9 0 0 0-9.3.72c-.03.55-.05 8.2-.05 8.2h10.75a3.1 3.1 0 0 0 0-9.2Z"
      />
    </svg>
  );
}

export default function MediaSection() {
  return (
    <section className="media-section" id="media">
      <div className="media-inner">
        <h1 className="media-heading">Watch &amp; Listen</h1>

        <div className="media-divider" />

        <p className="media-subtext">
          Readings, conversations, and recordings with Pat Owen.
        </p>

        <div className="media-video-grid">
          {videos.map((video, i) => (
            <div className="media-card" key={i}>
              <div className="media-video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="media-card-body">
                <h3 className="media-card-title">
                  {video.title}
                </h3>

                <p className="media-card-description">
                  {video.description}
                </p>

                <a
                  className="media-card-link"
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon />
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="media-audio-card">
          <div className="media-audio-body">
            <h3 className="media-card-title">
              {audio.title}
            </h3>

            <p className="media-card-description">
              {audio.description}
            </p>

            <a
              className="media-card-link"
              href={audio.soundcloudUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SoundCloudIcon />
              Listen on SoundCloud
            </a>
          </div>

          <div className="media-audio-embed">
            <iframe
              title={audio.title}
              width="100%"
              height="120"
              frameBorder="0"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                audio.soundcloudUrl
              )}&color=%2312225c&auto_play=false&show_user=false`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}