import QRCodeImg from "@/assets/image-qr-code.png";

function QRCode() {
  return (
    <main className="flex h-screen items-center justify-center">
      <figure className="max-w-[min(80%,320px)] rounded-2xl bg-white p-3">
        <img
          src={QRCodeImg}
          alt="QR code linking to frontend mentor"
          className="h-auto w-full rounded-2xl"
        ></img>
        <figcaption className="flex flex-col gap-2 py-4 text-center">
          <h1 className="card-title">
            Improve your front-end skills by building projects
          </h1>
          <p className="card-paragraph">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </figcaption>
      </figure>
    </main>
  );
}

export default QRCode;
