'use client';
import html2canvas from 'html2canvas';
import { ChangeEvent, useRef, useState } from 'react';

export default function Home() {
  const [uploadedImg, setUploadedImg] = useState<string | null>(null);

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = Array.from(files)[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUploadedImg(reader.result as string);
      };
    }
  };

  const downloadMeme = () => {
    const memeElement = document.getElementById('meme') as HTMLElement;

    // Set the desired scale for higher resolution
    const scale = window.matchMedia('(max-width: 767px)').matches ? 2 : 1; // You can adjust this value as needed

    // Use html2canvas with the scale option
    html2canvas(memeElement, { scale: scale }).then((canvas) => {
      // Convert the canvas content to a data URL
      const dataURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      const downloadLink = document.createElement('a');

      // Set the link's href to the data URL
      downloadLink.href = dataURL;

      // Set the link's download attribute with a desired filename
      downloadLink.download = 'chanandler_bong_meme.png';

      // Append the link to the document
      document.body.appendChild(downloadLink);

      // Trigger a click on the link to initiate the download
      downloadLink.click();

      // Remove the link from the document
      document.body.removeChild(downloadLink);
    });
  };

  const uploadImgRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex flex-col gap-y-8 xl:flex-row pt-6 sm:pt-12 max-w-[1300px] px-4 sm:px-8 xl:px-0 mx-auto">
      <div
        id="meme"
        className="relative max-w-[800px] mx-auto xl:max-w-none xl:w-1/2 aspect-square overflow-hidden"
      >
        <img
          className="w-full h-full"
          src="/images/background.png"
          alt="background"
        />
        <img
          className="w-[50%] aspect-square object-cover absolute top-[49%] left-[21.5%] rotate-[15deg] brightness-90 shadow-2xl"
          src={uploadedImg || '/images/bongify-album.png'}
          alt="album cover"
        />
        <img
          className="absolute top-0 left-0 w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,1)]"
          src="/images/foreground.png"
          alt="foreground"
        />
      </div>

      <div className="xl:w-1/2 xl:pl-8">
        <p className="text-center xl:text-left text-3xl md:text-6xl text-slate-50 md:leading-tight">
          {!uploadedImg ? (
            <>
              Could you be making anymore{' '}
              <span className="text-primary">
                Chanandler-Bong-Hugging-A-Vinyl
              </span>{' '}
              meme using Bongify?
            </>
          ) : (
            <>
              Whooopppaahh! Your brand new{' '}
              <span className="text-primary">
                Chanandler-Bong-Hugging-A-Vinyl
              </span>{' '}
              meme is ready.
            </>
          )}
        </p>

        <button
          onClick={() =>
            uploadedImg ? downloadMeme() : uploadImgRef.current?.click()
          }
          className="hover:shadow-[0_8px_32px_rgba(0,219,77,0.161)] mt-12 flex gap-x-4 items-center justify-center text-background bg-primary text-xl md:text-2xl w-full mb-4 rounded py-4 px-6"
        >
          {uploadedImg ? (
            <>
              <DownloadIcon />
              <span>Download Your Meme</span>
            </>
          ) : (
            <>
              <UploadIcon />
              <span>Upload Your Album</span>
            </>
          )}
        </button>

        <input
          hidden
          ref={uploadImgRef}
          type="file"
          id="cover-image"
          className=""
          placeholder="Upload Image"
          onChange={fileChangeHandler}
        />
      </div>
    </main>
  );
}

const UploadIcon = () => (
  <div>
    <svg
      className="h-8 w-8 md:h-10 md:w-10"
      width="58"
      height="52"
      viewBox="0 0 58 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.1055 19.4364V49M29.1055 19.4364L38.8159 29.291M29.1055 19.4364L19.3951 29.291M46.908 35.8606C51.8247 35.8606 55 31.817 55 26.8273C54.9998 24.8519 54.3616 22.931 53.183 21.3588C52.0044 19.7866 50.3505 18.6498 48.4746 18.1225C48.186 14.4384 46.6814 10.9608 44.2042 8.25187C41.727 5.54294 38.4219 3.76106 34.8234 3.1943C31.2248 2.62755 27.543 3.30905 24.3733 5.12863C21.2036 6.9482 18.7312 9.79949 17.3559 13.2215C14.4603 12.407 11.3645 12.7931 8.74946 14.295C6.13442 15.7968 4.21438 18.2914 3.41173 21.23C2.60907 24.1685 2.98955 27.3103 4.46946 29.9641C5.94938 32.618 8.4075 34.5665 11.3031 35.3811"
        stroke="#121212"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
const DownloadIcon = () => (
  <div>
    <svg
      className="h-8 w-8 md:h-10 md:w-10"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0974 25.4198V50.8163M27.0974 50.8163L36.0609 41.8528M27.0974 50.8163L18.1339 41.8528M15.1461 12.0822C17.3819 12.4019 19.4531 13.4401 21.0471 15.0401M43.5304 32.8894C48.0689 32.8894 51 29.2114 51 24.6729C50.9998 22.876 50.4107 21.1288 49.3228 19.6988C48.2349 18.2687 46.7082 17.2347 44.9765 16.7551C44.7101 13.4042 43.3213 10.241 41.0347 7.77699C38.748 5.31301 35.6972 3.69224 32.3754 3.17674C29.0536 2.66123 25.6551 3.28111 22.7292 4.93616C19.8033 6.5912 17.5211 9.18468 16.2516 12.2973C13.5788 11.5564 10.7211 11.9076 8.3072 13.2737C5.89332 14.6397 4.12097 16.9088 3.38006 19.5816C2.63914 22.2544 2.99035 25.1121 4.35643 27.526C5.7225 29.9399 7.99154 31.7122 10.6644 32.4532"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
