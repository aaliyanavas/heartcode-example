// export default function Home() {
//   return (
//     <div className="bg-[url('/sudoku.jpeg')]">
//       <div className="flex flex-col justify-center h-dvh ">
//         <p className="font-bold text-5xl text-center">Dont Do Drugs</p>
//         <p className="text-sm text-center">Drugs Are Bad!!!</p>
//       </div>
//     </div>
//   );
// }

import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["skibidi", "litty", "sigma"];

  return (
	<div>
  	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	<h1 className="font-bold text-5xl">Taking drugs is not
      	<FlipWords words={words}/>
    	</h1>
      <h2 className="text-sm text-center">Don't be an idiot and ruin your life</h2>
  	</div>
	</div>
  )
}


