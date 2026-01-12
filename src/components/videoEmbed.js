import '../styles/components/video.css'
function Embed({ videoId }) {
  return (
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}


export default Embed;
