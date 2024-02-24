import { Button } from 'flowbite-react';
import image from '../assets/Ai-inovation.png'
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border bg-black border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col mt-10">
            <h2 className='sm:text-2xl text-md'>
                Want to unleash the power of AI tools with GEN-AI?
            </h2>
            <p className='text-gray-500 sm:my-8 my-4'>
            Visit GEN-AI to explore latest tools of AI innovations.
            </p>
            <p className='text-gray-500'>
            You can explore variety of AI tools like Image Generator, URL Text Summarizer and Chat with PDF .
            </p>
            <a href="https://gen-ai-tools.netlify.app/" target='_blank' rel='noopener noreferrer'>
            <Button className='w-40 ml-[36%] mt-10' outline gradientDuoTone="purpleToBlue" size="xl">GEN-AI</Button>
            </a>

      </div>

        <div className="flex-1">
            <a href="https://gen-ai-tools.netlify.app/" target='_blank' rel='noopener noreferrer'>
              <img src={image} />
            </a>
        </div>
    </div>
  )
}