import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import { useEditVideoMutation } from "../../features/API/apiSlice";
import Success from "../ui/Success";
import Error from "../ui/Error";
export default function Form({ video }) {
    const [editVideo, { data: editedVideo, isError, isSuccess, isLoading }] = useEditVideoMutation()
    const {
        id,
        title: initialTitle,
        author: initialAuthor,
        views: initialViews,
        duration: initialDuration,
        link: initialLink,
        date: initialDate,
        description: initialDescription,
        thumbnail: initialThumbnail } = video
    const [title, setTitle] = useState(initialTitle)
    const [author, setAuthor] = useState(initialAuthor)
    const [views, setViews] = useState(initialViews)
    const [duration, setDuration] = useState(initialDuration)
    const [date, setDate] = useState(initialDate)
    const [link, setLink] = useState(initialLink)
    const [description, setDescription] = useState(initialDescription)
    const [thumbnail, setThumbnail] = useState(initialThumbnail)

    const handelSubmit = (e) => {
        e.preventDefault()
        editVideo({
            id,
            data: {
                title,
                author,
                views,
                duration,
                date,
                link,
                description,
                thumbnail
            }
        });
    }




    return (
        <form onSubmit={handelSubmit} method="PATCH">
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
            </div>
            {isSuccess && < Success message="Video was added successfully" />}
            {isError && < Error message="Error Editing video" />}
        </form>
    );
}
