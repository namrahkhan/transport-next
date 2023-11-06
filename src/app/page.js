"use client";

import ServiceSprite from "@/components/ServiceSprite";
import Card from "@/components/core/Card";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[...new Array(6)].map((val, index) => {
            return (
              <ServiceSprite key={index}>
                LOREM IPSUM DOLOR SIT AMET
              </ServiceSprite>
            );
          })}
        </div>
      </div>
    </main>
  );
}
