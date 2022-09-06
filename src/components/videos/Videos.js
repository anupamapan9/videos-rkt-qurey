import { useGetVideosQuery } from "../../features/API/apiSlice";
import Video from "./Video";
import VideoLoader from '../ui/loaders/VideoLoader'
import Error from '../ui/Error'

export default function Videos() {
    const { data: videos, isLoading, isError, error } = useGetVideosQuery();
    let content = null;

    if (isLoading) {
        content = <><VideoLoader /> <VideoLoader /><VideoLoader /><VideoLoader /> <VideoLoader /><VideoLoader /></>
    }
    if (!isLoading && isError) {
        content = <Error message="There Was an error" />
    }
    if (!isLoading && !isError && videos?.length === 0) {
        content = <Error message="No videos found" />
    }
    if (!isLoading && !isError && videos?.length > 0) {
        content = videos.map(video => <Video video={video} key={video.id} />)
    }
    return (
        content
    );
}
