import type { Credits } from "@/shared/api";
import type { FC } from "react";
import { getStorageUrl } from "@/shared/utils";

interface Props {
    contents: Credits | undefined
}

const ContentCredits: FC<Props> = ({ contents }) => {
    return (
        <section className="flex flex-col py-20 gap-15">
            <h2 className="text-4xl text-center">Актерский состав</h2>
            <section className="grid grid-cols-7 gap-2">
                {
                    contents?.cast?.map((actor) => (
                        <article>
                            <img
                                className="w-50 h-70 object-cover"
                                src={ actor.profile_path ? getStorageUrl(actor.profile_path) : '/default-avatar.jpg' }
                                alt=""
                            />
                            <p className="text-xl">{ actor.name }</p>
                            <p className="text text-gray-500">{ actor.character }</p>
                        </article>
                    )).slice(0, 14)
                }
            </section>
        </section>
    )
}

export default ContentCredits