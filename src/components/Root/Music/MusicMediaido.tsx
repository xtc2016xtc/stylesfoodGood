import {useCallback, useEffect, useRef, useState} from 'react';

interface MusicMediaidoProps {
    isPlaying: boolean;
    togglePlay: () => void;
    musicFiles: string[];
}

const MusicMediaido = ({ isPlaying, togglePlay, musicFiles }: MusicMediaidoProps) => {
    // const getRandomMusicIndex = () => Math.floor(Math.random() * musicFiles.length);原方案
    /*修改方案*/
    const getRandomMusicIndex = useCallback(

        () => Math.floor(Math.random() * musicFiles.length),

        [musicFiles.length]

    );
    const [currentMusicIndex, setCurrentMusicIndex] = useState(getRandomMusicIndex);
    const audioRef = useRef(new Audio(musicFiles[currentMusicIndex]));

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true; // 设置音频循环播放

        const handlePlayPause = () => {
            const playPromise = isPlaying ? audio.play() : audio.pause();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Audio playback started successfully');
                    })
                    .catch(error => {
                        console.error('Error during audio playback:', error);
                    });
            }
        };

        handlePlayPause();
    }, [isPlaying]);

    useEffect(() => {

        const audio = audioRef.current;

        const handleEnded = () => {

            const nextIndex = getRandomMusicIndex();

            setCurrentMusicIndex(nextIndex);

            audio.src = musicFiles[nextIndex];

            if (isPlaying) {

                audio.play();

            }

        };

        audio.addEventListener('ended', handleEnded);

        return () => {

            audio.removeEventListener('ended', handleEnded);

        };

    }, [isPlaying, musicFiles, getRandomMusicIndex]);

    return (
        <div className="translate-x-0 fixed top-[18px] left-[70px] z-[10000]">
            {isPlaying ? (
                <img
                    src="/Header/ti.png"
                    alt="播放"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={togglePlay}
                />
            ) : (
                <img
                    src="/Header/t2.png"
                    alt="静音"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={togglePlay}
                />
            )}
        </div>
    );
};

export default MusicMediaido;

/*修改方案*/
/*
import { useCallback, useEffect, useRef, useState } from 'react';

interface MusicMediaidoProps {
    isPlaying: boolean;
    togglePlay: () => void;
    musicFiles: string[];
}

const MusicMediaido = ({ isPlaying, togglePlay, musicFiles }: MusicMediaidoProps) => {
    const getRandomMusicIndex = useCallback(
        () => Math.floor(Math.random() * musicFiles.length),
        [musicFiles.length]
    );
    const [currentMusicIndex, setCurrentMusicIndex] = useState(getRandomMusicIndex);
    const audioRef = useRef(new Audio(musicFiles[currentMusicIndex]));

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;

        const handlePlayPause = () => {
            const playPromise = isPlaying ? audio.play() : audio.pause();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log('Audio playback started successfully');
                    })
                    .catch(error => {
                        console.error('Error during audio playback:', error);
                    });
            }
        };

        handlePlayPause();
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            const nextIndex = getRandomMusicIndex();
            setCurrentMusicIndex(nextIndex);
            audio.src = musicFiles[nextIndex];
            if (isPlaying) {
                audio.play();
            }
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isPlaying, musicFiles, getRandomMusicIndex]);

    return (
        <div className="translate-x-0 fixed top-[18px] left-[70px] z-[10000]">
            {isPlaying ? (
                <img
                    src="/Header/ti.png"
                    alt="播放"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={togglePlay}
                />
            ) : (
                <img
                    src="/Header/t2.png"
                    alt="静音"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={togglePlay}
                />
            )}
        </div>
    );
};

export default MusicMediaido;*/
