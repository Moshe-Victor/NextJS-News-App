import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";
import {getNewsItem} from "@/lib/news";

export default async function ImagePage({params}) {
    const newsItemSlug = params.slug;
    //const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsItemSlug);
    const newsItem = await getNewsItem(newsItemSlug);

    console.log(newsItem.image);

    if (!newsItem) {
        return notFound();
    }
    return (
        <div className='fullscreen-image'>
            <img  src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
    )
}