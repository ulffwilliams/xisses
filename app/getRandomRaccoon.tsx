"use client";
import { useState } from "react";
import Image from "next/image";

type RaccResponse = {
  success: boolean;
  data: {
    url: string;
    size: number;
    contentType: string;
  };
};

async function getRaccoonMeta(): Promise<RaccResponse> {
  const res = await fetch("https://api.racc.lol/raccoon?json=true", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export default function RandomRaccoon() {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const meta = await getRaccoonMeta();
      setImgUrl(meta.data.url);
    } catch (e: any) {
      setError("Kunde inte hämta tvättbjörn. Testa igen!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }} className=" flex flex-col gap-5">
      <button
        onClick={handleClick}
        disabled={loading}
        className="h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-full"
      >
        {loading ? "Hämtar..." : imgUrl ? "Visa tvättbjörn" : "Visa tvättbjörn"}
      </button>
      {error && <div style={{ color: "red", marginTop: 16 }}>{error}</div>}
      {imgUrl && (
        <Image src={imgUrl} alt="A raccoon" width={800} height={600} priority />
      )}
    </div>
  );
}
