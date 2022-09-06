import { useGetRelatedVideosQuery } from "../../../features/API/apiSlice";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({ id, title }) {
    const { data: relatedVideos, isLoading, isError } = useGetRelatedVideosQuery({ id, title })

    let content = null;
    if (isLoading) {
        content = <> <RelatedVideoLoader /> <RelatedVideoLoader /></>
    }
    if (!isLoading && !isError && relatedVideos.length > 0) {
        content = relatedVideos.map(r => <RelatedVideo key={r.id} video={r} />)
    }
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}
