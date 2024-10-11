// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { toast, useToast } from "@/hooks/use-toast";

// const FormSchema = z.object({
//   name: z.string({
//     required_error: "Please enter a name",
//   }).min(2, {
//     message: "name must be more than 2 characters long",
//   }).max(20, {
//     message: "name must be no longer than 20 characters",
//   }),
//   question1: z.string({
//     required_error: "Please select an option",
//   }),
// });

// export default function Quiz() {
//   const { toast } = useToast();
//   const [showVideo, setShowVideo] = useState(false);

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   });

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     if (data.question1 === "yes") {
//       setShowVideo(true);  // Show video if the answer is "yes"
//       toast({
//         title: `Congratulations ${data.name}`,
//         description: "You are a drug dealer",
//       });
//     } else {
//       setShowVideo(false); // Hide video if the answer is "no"
//       toast({
//         title: `Thank you ${data.name}`,
//         description: "Unfortunately you are not a drug dealer",
//       });
//     }
//   }

//   return (
//     <div>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Question 1:</FormLabel>
//                 <FormDescription>What is your name?</FormDescription>
//                 <FormControl>
//                   <Input placeholder="your name here" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="question1"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Question 2:</FormLabel>
//                 <FormDescription>Do you sell drugs?</FormDescription>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Please select an answer" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="yes">Yes</SelectItem>
//                     <SelectItem value="no">No</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//             />
//           <Button type="submit">Submit</Button>
//         </form>
//       </Form>
      
//       {/* Conditionally render the video */}
//       {showVideo && (
//         <div className="mt-6">
//           <video width="400" controls>
//             <source src="/public/rickroll.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as z from "zod"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Button } from "@/components/ui/button"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Input } from "@/components/ui/input"
// import { toast, useToast } from "@/hooks/use-toast"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// const FormSchema = z.object({
//   name: z.string().min(2, {
//     message: "Name must be at least 2 characters.",
//   }),
//   question1: z.enum(["true", "false"], {
//     required_error: "Please select an answer.",
//   }),
//   question2: z.enum(["a", "b", "c", "d"], {
//     required_error: "Please select an answer.",
//   }),
//   question3: z.enum(["true", "false"], {
//     required_error: "Please select an answer.",
//   }),
// })

// export default function DrugAwarenessQuiz() {
//   const { toast } = useToast()
//   const [score, setScore] = useState(0)
//   const [showResults, setShowResults] = useState(false)

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   })

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     let newScore = 0
//     if (data.question1 === "true") newScore++
//     if (data.question2 === "c") newScore++
//     if (data.question3 === "false") newScore++

//     setScore(newScore)
//     setShowResults(true)

//     toast({
//       title: `Thank you, ${data.name}!`,
//       description: `You scored ${newScore} out of 3. Keep learning about drug abuse awareness!`,
//     })
//   }

//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Drug Abuse Awareness Quiz</CardTitle>
//         <CardDescription>Test your knowledge about drug abuse and its effects.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Your Name</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter your name" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="question1"
//               render={({ field }) => (
//                 <FormItem className="space-y-3">
//                   <FormLabel>1. Drug addiction is a chronic disease that affects the brain.</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-col space-y-1"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">True</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">False</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="question2"
//               render={({ field }) => (
//                 <FormItem className="space-y-3">
//                   <FormLabel>2.Which of the following is NOT a common sign of drug abuse?</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-col space-y-1"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="a" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Changes in behavior</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="b" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Neglecting responsibilities</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="c" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Improved work performance</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="d" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Physical health issues</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="question3"
//               render={({ field }) => (
//                 <FormItem className="space-y-3">
//                   <FormLabel>3. Prescription drugs are always safe to use, even without a doctor's supervision.</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-col space-y-1"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">True</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">False</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit">Submit</Button>
//           </form>
//         </Form>
//       </CardContent>
//       {showResults && (
//         <CardFooter>
//           <p className="text-sm text-muted-foreground">
//             Your score: {score} out of 3. {score === 3 ? "Great job!" : "Keep learning about drug abuse awareness!"}
//           </p>
//         </CardFooter>
//       )}
//     </Card>
//   )
// }

"use client"

import { useState, useRef, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  question1: z.enum(["true", "false"], {
    required_error: "Please select an answer.",
  }),
  question2: z.enum(["a", "b", "c", "d"], {
    required_error: "Please select an answer.",
  }),
  question3: z.enum(["true", "false"], {
    required_error: "Please select an answer.",
  }),
})

export default function DrugAwarenessQuiz() {
  const { toast } = useToast()
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    let newScore = 0
    if (data.question1 === "true") newScore++
    if (data.question2 === "c") newScore++
    if (data.question3 === "false") newScore++

    setScore(newScore)
    setShowResults(true)
    setShowVideo(newScore === 3)

    toast({
      title: `Thank you, ${data.name}!`,
      description: `You scored ${newScore} out of 3. ${newScore === 3 ? "Congratulations! Watch the video below." : "Keep learning about drug abuse awareness!"}`,
    })
  }

  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current.play()
    }
  }, [showVideo])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Drug Abuse Awareness Quiz</CardTitle>
          <CardDescription className="text-purple-100">Test your knowledge about drug abuse and its effects.</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} className="border-purple-300 focus:border-purple-500" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>1. Drug addiction is a chronic disease that affects the brain.</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-purple-300 focus:border-purple-500">
                          <SelectValue placeholder="Select your answer" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
</SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>2. Which of the following is NOT a common sign of drug abuse?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-purple-300 focus:border-purple-500">
                          <SelectValue placeholder="Select your answer" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="a">Changes in behavior</SelectItem>
                        <SelectItem value="b">Neglecting responsibilities</SelectItem>
                        <SelectItem value="c">Improved work performance</SelectItem>
                        <SelectItem value="d">Physical health issues</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>3. Prescription drugs are always safe to use, even without a doctor's supervision.</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-purple-300 focus:border-purple-500">
                          <SelectValue placeholder="Select your answer" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        {showResults && (
          <CardFooter className="bg-purple-50 rounded-b-lg flex flex-col items-center">
            <p className="text-sm text-purple-800 font-medium mb-4">
              Your score: {score} out of 3. {score === 3 ? "Great job!" : "Keep learning about drug abuse awareness!"}
            </p>
            {showVideo && (
              <div className="w-full max-w-sm mt-4">
                <video
                  ref={videoRef}
                  className="w-full rounded-lg shadow-md"
                  controls
                >
                  <source src="/rickroll.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  )
}