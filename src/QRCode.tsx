import QRCodeImg from "@/assets/image-qr-code.png";

function QRCode() {
  return (
    <div className="flex h-screen items-center justify-center">
      <main className="max-w-[min(80%,320px)] rounded-2xl bg-white p-3">
        <img src={QRCodeImg} alt="QRCode Image" className="h-auto w-full rounded-2xl"></img>
        <div className="flex flex-col gap-2 py-4 text-center">
          <h1 className="card-title">
            Improve your front-end skills by building projects
          </h1>
          <p className="card-paragraph">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </main>
    </div>
  );
}

export default QRCode;
