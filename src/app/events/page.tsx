import EventVideos from '../components/eventVideos';
import Events from '../components/events';

// Recorded events first (what donors and families come to see), then upcoming events from lu.ma.
export default function EventsPage() {
  return (
    <>
      <EventVideos />
      <Events />
    </>
  );
}
