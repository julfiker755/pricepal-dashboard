"use client"
import NavTitle from '@/components/reuseable/nav-title'
import TextEditor from '@/components/reuseable/text-editor'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

export default function Tarms() {
    const [content, setContent] = useState("");

    const handleSave = () => {
      console.log("Blog content:", content);
      // save to API or database here
    };
  return (
    <div>
          <NavTitle title={"Terms & Conditions"} subTitle={"You can see total users of your app from here."} />
          <TextEditor value={content} onChange={setContent} />
          <div className='mt-3 flex justify-end'>
          <Button variant={"main"} className={"rounded-sm px-20"}>Save</Button>
          </div>
    </div>
  )
}
