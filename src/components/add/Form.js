// import Success from "../ui/Success";
import { useState } from "react";
import { useAddVideoMutation } from "../../features/API/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from '../ui/Success'
import Error from '../ui/Error'
export default function Form() {
    const [addVideo, { data: video, isLoading, isError, isSuccess }] = useAddVideoMutation()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [views, setViews] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const reset = () => {
        setTitle('')
        setAuthor('')
        setDescription('')
        setDuration('')
        setLink('')
        setThumbnail('')
        setViews('')
        setDate('')
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        addVideo({
            title,
            author,
            views,
            duration,
            date,
            link,
            description,
            thumbnail
        });
        reset()
    }
    return (
        <form onSubmit={handelSubmit} method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput
                                title="Video Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput title="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)} />
                        </div>

                        <div className="col-span-6">
                            <TextArea title="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />

                        </div>

                        <div className="col-span-6">
                            <TextInput
                                onChange={(e) => setLink(e.target.value)}
                                value={link}
                                title="YouTube Video link" />

                        </div>

                        <div className="col-span-6">
                            <TextInput
                                onChange={(e) => setThumbnail(e.target.value)}
                                value={thumbnail}
                                title="Thumbnail link" />

                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput
                                onChange={(e) => setDate(e.target.value)}
                                value={date}
                                title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                                title="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput
                                onChange={(e) => setViews(e.target.value)}
                                value={views}
                                title="Video no of views" />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>

                {isSuccess && < Success message="Video was added successfully" />}
                {isError && < Error message="Error Adding video" />}
            </div>
        </form>
    );
}
