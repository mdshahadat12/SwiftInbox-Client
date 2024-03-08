import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesAnimation = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
        // console.log(container);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000000" // Black background
                        }
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: 0
                    },
                    detectRetina: true,
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: {
                                enable: false,
                                mode: []
                            },
                            onHover: {
                                enable: false,
                                mode: []
                            },
                            resize: true
                        }
                    },
                    particles: {
                        color: {
                            value: "#00d7c0" 
                        },
                        move: {
                            enable: true,
                            speed: 0.5
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 1
                        },
                        shape: {
                            type: "square"
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 3
                            }
                        }
                    },
                    emitters: [
                        {
                            autoPlay: true,
                            life: {
                                wait: false
                            },
                            rate: {
                                quantity: 5,
                                delay: 0.15
                            },
                            position: {
                                x: 0,
                                y: 30
                            },
                            particles: {
                                move: {
                                    direction: "top-right"
                                }
                            }
                        },
                        {
                            autoPlay: true,
                            life: {
                                wait: false
                            },
                            rate: {
                                quantity: 5,
                                delay: 0.15
                            },
                            position: {
                                x: 100,
                                y: 30
                            },
                            particles: {
                                move: {
                                    direction: "top-left"
                                }
                            }
                        }
                    ]
                }}
            />
        </div>
    );
};

export default ParticlesAnimation;
