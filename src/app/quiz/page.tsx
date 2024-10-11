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