"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react"; // For the video icon
import Image from "next/image";
import MilestonesHeader from "@/layout/milestones-header/page"; // Assuming this is your header component

const VideoGallary = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Modal state
  const [currentVideo, setCurrentVideo] = useState(null); // Store the current video URL

  // Function to open the modal and set the current video
  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  // Function to close the modal
  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      <MilestonesHeader />
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-5">
            {/* Video Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {/* Card 1 */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openVideoModal("https://www.youtube.com/embed/5khq1mUzNKU?si=MQFAKULO0dIu9fbr")
                }
              >
                <Image
                  src="/assets/images/video-gallary/gallary1.jpeg" // Replace with your image path
                  alt="Thumbnail 1"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openVideoModal("https://www.youtube.com/embed/5khq1mUzNKU?si=MQFAKULO0dIu9fbr")
                }
              >
                <Image
                  src="/assets/images/video-gallary/gallary2.png" // Replace with your image path
                  alt="Thumbnail 2"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openVideoModal("https://www.youtube.com/embed/5khq1mUzNKU?si=MQFAKULO0dIu9fbr")
                }
              >
                <Image
                  src="/assets/images/video-gallary/gallary3.jpg" // Replace with your image path
                  alt="Thumbnail 3"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {/* Card 4 */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openVideoModal("https://www.youtube.com/embed/5khq1mUzNKU?si=MQFAKULO0dIu9fbr")
                }
              >
                <Image
                  src="/assets/images/video-gallary/gallary1.jpeg" // Replace with your image path
                  alt="Thumbnail 1"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Card 5 */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openVideoModal("https://www.youtube.com/embed/5khq1mUzNKU?si=MQFAKULO0dIu9fbr")
                }
              >
                <Image
                  src="/assets/images/video-gallary/gallary2.png" // Replace with your image path
                  alt="Thumbnail 2"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Card 6 */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  openVideoModal("https://www.youtube.com/embed/5khq1mUzNKU?si=MQFAKULO0dIu9fbr")
                }
              >
                <Image
                  src="/assets/images/video-gallary/gallary3.jpg" // Replace with your image path
                  alt="Thumbnail 3"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-lg transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl bg-white rounded-lg">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-md"
            >
              ✕
            </button>
            <iframe
              src={currentVideo}
              title="Video Player"
              className="w-full h-[400px] rounded-lg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallary;





