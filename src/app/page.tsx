import Image from "next/image";
import drugs from "@/app/assets/drugs.jpeg";
import bg from "@/app/assets/bg.jpeg"

export default function Home(){
  return(
    <div className={`h-screen flex justify-center`} style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="flex flex-col justify-center h-full">
          <p className="font-bold text-5xl text-center">Don't Do Drugs</p>
          <p className="text-sm text-center">Drugs Are Bad!</p>
          <Image src={drugs} alt="0.5" width={500} />
      </div>
    </div>
  );
}

import { FlipWords } from "@/components/ui/flip-words";
// import { db } from "@/db/index"
// import { users } from "@/db/schema"

// export default function Home() {
//   const words: string[] = ["Bad, "BAD", "HORRIBLE"];

//   return (
// 	<div>
//   	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
//     	<h1 className="font-bold text-5xl">Taking drugs is not
//       	<FlipWords words={words}/>
//     	</h1>
//       <h2 className="text-sm text-center">Don't be an idiot and ruin your life</h2>
//   	</div>
// 	</div>
//   )
// }


