import React from 'react'
import  {Editor} from "@tinymce/tinymce-react"
import  {Controller} from "react-hook-form"

function RTE({name,control,label,defaultValue=""}) {
  return (
    <div className='w-full'>
      {label && <label className='text-sm inline-block mb-1 pl-1'>{label}</label>}

      <Controller
      name = {name || 'content'}
      control={control}
      render={({field : {onChange}})=>(
        <Editor
        apiKey='m2bszzebn7utub5cy8p6q7z5zwel4lssefsj0ke9vdui84ny'
        init={{
          height : 500,
          menubar: false,
          plugins: 'tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
        }}
        initialValue="Welcome to TinyMCE!"
        onEditorChange={onChange}
      />
      )}
      />

      
    </div>
  )
}

export default RTE