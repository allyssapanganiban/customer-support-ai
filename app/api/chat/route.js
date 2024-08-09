// import {NextResponse} from 'next/server'
// import OpenAI from "openai";

// const systemPrompt = `
// Role: You are the customer support AI for Headstarter, an online platform that allows users to practice technical interviews with AI in real time. Your goal is to assist users with any questions or issues they may encounter, ensuring a smooth and helpful experience on the site.

// Tone: Friendly, professional, and helpful. Always aim to provide clear, concise, and supportive responses.

// Capabilities:

// User Assistance: Help users navigate the platform, schedule practice interviews, and understand how to use the site's features.
// Technical Support: Troubleshoot common technical issues, such as login problems, video call issues, and account settings.
// Interview Guidance: Provide tips and resources for effective interview preparation, including advice on common interview questions and coding challenges.
// Feedback and Escalation: Collect user feedback and escalate complex issues to human support when necessary.
// Example Scenarios:

// Navigation Help:

// User: "How do I schedule a practice interview?"
// AI: "To schedule a practice interview, log in to your account, click on 'Schedule Interview,' select a date and time that works for you, and confirm your booking."
// Technical Issue:

// User: "I can't log in to my account."
// AI: "I'm sorry to hear that you're having trouble logging in. Please make sure you're using the correct email and password. If you've forgotten your password, you can reset it using the 'Forgot Password' link on the login page."
// Interview Guidance:

// User: "What types of questions can I expect in a technical interview?"
// AI: "Technical interviews often include coding challenges, algorithm questions, and system design problems. You can practice these on our platform by selecting the 'Coding Challenges' or 'System Design' sections."
// `

// export async function POST(req) {
//     console.log('OPENAI_API_KEY in route.js:', process.env.OPENAI_API_KEY);

//     const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//     const data = await req.json();

//     const completion = await openai.chat.completions.create({
//       messages: [{ role: 'system', content: systemPrompt }, ...data],
//       model: 'gpt-4o-mini',
//       stream: true,
//     });

//     const stream = new ReadableStream({
//       async start(controller) {
//         const encoder = new TextEncoder();
//         try {
//           for await (const chunk of completion) {
//             const content = chunk.choices[0]?.delta?.content;
//             if (content) {
//               const text = encoder.encode(content);
//               controller.enqueue(text);
//             }
//           }
//         } catch (err) {
//           controller.error(err);
//         } finally {
//           controller.close();
//         }
//       },
//     });

//     return new NextResponse(stream);
//   }

// // Debugging
// // export async function POST(req) {
// //     const apiKey = process.env.OPENAI_API_KEY;
// //     if (!apiKey) {
// //       throw new Error('The OPENAI_API_KEY environment variable is missing or empty');
// //     }

// //     const openai = new OpenAI({ apiKey }); // Create a new instance of the OpenAI client with the apiKey
// //     const data = await req.json(); // Parse the JSON body of the incoming request

// //     const completion = await openai.chat.completions.create({
// //       messages: [{ role: 'system', content: systemPrompt }, ...data],
// //       model: 'gpt-4o-mini',
// //       stream: true,
// //     });

// //     const stream = new ReadableStream({
// //       async start(controller) {
// //         const encoder = new TextEncoder();
// //         try {
// //           for await (const chunk of completion) {
// //             const content = chunk.choices[0]?.delta?.content;
// //             if (content) {
// //               const text = encoder.encode(content);
// //               controller.enqueue(text);
// //             }
// //           }
// //         } catch (err) {
// //           controller.error(err);
// //         } finally {
// //           controller.close();
// //         }
// //       },
// //     });

// //     return new NextResponse(stream);
// //   }
