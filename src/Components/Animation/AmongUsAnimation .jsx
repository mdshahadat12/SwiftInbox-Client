import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const AmongUsAnimation = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    autoPlay: true,
                    background: {
                        color: {
                            value: "#000000"
                        },
                        image: "",
                        position: "",
                        repeat: "",
                        size: "",
                        opacity: 1
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1
                    },
                    detectRetina: true,
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: {
                                enable: false,
                                mode: []
                            },
                            onDiv: {
                                selectors: [],
                                enable: false,
                                mode: [],
                                type: "square"
                            },
                            onHover: {
                                enable: false,
                                mode: []
                            },
                            resize: {
                                delay: 0.5,
                                enable: true
                            }
                        },
                        modes: {
                            trail: {
                                delay: 1,
                                pauseOnStop: false,
                                quantity: 1
                            }
                        }
                    },
                    particles: {
                        bounce: {
                            horizontal: {
                                value: 1
                            },
                            vertical: {
                                value: 1
                            }
                        },
                        color: {
                            value: "00D0BA"
                        },
                        links: {
                            enable: false
                        },
                        move: {
                            enable: true,
                            direction: "none",
                            speed: 1
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.9,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 1,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: 5,
                            random: true,
                            animation: {
                                enable: true,
                                speed: 3,
                                minimumValue: 1,
                                sync: false
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default AmongUsAnimation;
