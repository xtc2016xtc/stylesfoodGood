import {useCallback, useEffect, useRef, useState} from 'react';

interface MusicMediaidoProps {
    isPlaying: boolean;
    togglePlay: () => void;
    musicFiles: string[];
}
/*初版*/
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

    /*修改方案*/


    useEffect(() => {

        const audio = audioRef.current;

        /*const handleEnded = () => {

            const nextIndex = getRandomMusicIndex();

            setCurrentMusicIndex(nextIndex);

            audio.src = musicFiles[nextIndex];

            if (isPlaying) {

                audio.play();

            }

        };*/
        /*修改方案*/
        const handleEnded = () => {
            const nextIndex = getRandomMusicIndex();
            setCurrentMusicIndex(nextIndex);
            audio.src = musicFiles[nextIndex];

            if (isPlaying) {
                audio.play()
                    .then(() => {
                        console.log('Playback resumed after track change');
                    })
                    .catch((error) => {
                        console.error('Error resuming playback:', error);
                        // 可选：处理播放失败后的逻辑（如暂停状态）
                        togglePlay(); // 自动切换回暂停状态
                    });
            }
        };

        audio.addEventListener('ended', handleEnded);

        return () => {

            audio.removeEventListener('ended', handleEnded);

        };

    }, [isPlaying, musicFiles, getRandomMusicIndex, togglePlay]);

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

/*修改方案*/
/*const MusicMediaido = ({ isPlaying, togglePlay, musicFiles }: MusicMediaidoProps) => {
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

/*第二版需求修改方案*/
/*const MusicMediaido = ({ isPlaying, togglePlay, musicFiles }: MusicMediaidoProps) => {
    const getRandomMusicIndex = useCallback(
        () => Math.floor(Math.random() * musicFiles.length),
        [musicFiles.length]
    );
    const [currentMusicIndex, setCurrentMusicIndex] = useState(getRandomMusicIndex);
    const audioRef = useRef(new Audio(musicFiles[currentMusicIndex]));

    // 更新音频源和播放状态
    useEffect(() => {
        const audio = audioRef.current;
        audio.src = musicFiles[currentMusicIndex];
        audio.loop = true;

        if (isPlaying) {
            audio.play()
                .catch((error) => {
                    console.error('Error initializing playback:', error);
                    togglePlay();
                });
        }
    }, [currentMusicIndex, musicFiles, isPlaying, togglePlay]);

    // 处理播放/暂停逻辑
    useEffect(() => {
        const audio = audioRef.current;
        const handlePlayPause = () => {
            if (isPlaying) {
                audio.play()
                    .then(() => console.log('Playback started'))
                    .catch((error) => {
                        console.error('Playback error:', error);
                        togglePlay();
                    });
            } else {
                audio.pause();
            }
        };
        handlePlayPause();
    }, [isPlaying, togglePlay]);

    // 处理歌曲结束事件
    useEffect(() => {
        const audio = audioRef.current;
        const handleEnded = () => {
            const nextIndex = getRandomMusicIndex();
            setCurrentMusicIndex(nextIndex);
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [getRandomMusicIndex]);

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
};*/

/*第三版修改方案*/
/*const MusicMediaido = ({ isPlaying, togglePlay, musicFiles }: MusicMediaidoProps) => {
    const getRandomMusicIndex = useCallback(
        () => Math.floor(Math.random() * musicFiles.length),
        [musicFiles.length]
    );
    const [currentMusicIndex, setCurrentMusicIndex] = useState(getRandomMusicIndex);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const hasUserInteracted = useRef(false); // 标记用户是否已交互

    // 初始化音频对象（不自动播放）
    useEffect(() => {
        audioRef.current = new Audio(musicFiles[currentMusicIndex]);
        audioRef.current.loop = false;

        // 用户首次点击播放后，标记为已交互
        const handleFirstPlay = () => {
            hasUserInteracted.current = true;
        };
        audioRef.current.addEventListener('play', handleFirstPlay);

        return () => {
            audioRef.current?.removeEventListener('play', handleFirstPlay);
            audioRef.current?.pause();
        };
    }, [musicFiles, currentMusicIndex]);

    // 处理播放/暂停逻辑（仅在用户交互后允许播放）
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            if (hasUserInteracted.current) {
                // 用户已交互过，允许播放
                audio.play().catch((error) => {
                    console.error('Playback error:', error);
                    togglePlay(); // 回退状态
                });
            } else {
                // 未交互时尝试播放会被浏览器阻止，强制回退状态
                togglePlay();
            }
        } else {
            audio.pause();
        }
    }, [isPlaying, togglePlay]);

    // 处理歌曲结束事件（仅在已播放状态下切歌）
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => {
            const nextIndex = getRandomMusicIndex();
            setCurrentMusicIndex(nextIndex);
            if (isPlaying && hasUserInteracted.current) {
                // 切歌后自动播放（用户已交互过）
                audio.src = musicFiles[nextIndex];
                audio.play().catch((error) => {
                    console.error('Autoplay after ended failed:', error);
                });
            }
        };

        audio.addEventListener('ended', handleEnded);
        return () => audio.removeEventListener('ended', handleEnded);
    }, [isPlaying, musicFiles, getRandomMusicIndex]);

    return (
        <div className="translate-x-0 fixed top-[18px] left-[70px] z-[10000]">
            {isPlaying ? (
                <img
                    src="/Header/t2.png"
                    alt="静音"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={togglePlay}
                />
            ) : (
                <img
                    src="/Header/ti.png"
                    alt="播放"
                    className="w-[30px] h-[30px] cursor-pointer"
                    onClick={togglePlay}
                />
            )}
        </div>
    );
};*/



export default MusicMediaido;

