import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GenreResponseProps, MovieProps } from "../App"
import { api } from "../services/api";
import { Button } from "./Button"

type SidebarProps = {
    genres: GenreResponseProps[];
    setSelectedGenreId: Dispatch<SetStateAction<number>>;
    selectedGenreId: number;
}

export function SideBar({ genres, setSelectedGenreId, selectedGenreId }: SidebarProps){

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    )
}