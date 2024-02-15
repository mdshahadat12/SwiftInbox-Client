import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const EmailBoxAnimation = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
        // console.log(container);
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
                            value: "#000" // Background color (white)
                        }
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1
                    },
                    detectRetina: true,
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            }
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#3f51b5" // Email icon color
                        },
                        links: {
                            color: "#3f51b5", // Email icon color
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800 // Adjust density to control the number of particles
                            },
                            value: 30 // Adjust the number of particles
                        },
                        opacity: {
                            value: 0.5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        shape: {
                            type: "image",
                            image: {
                                src: "https://i.ibb.co/7Qp4zbw/Picsart-24-01-18-10-33-37-005-removebg-preview-1.png", // Email icon image
                                width: 200,
                                height: 200
                            }
                        },
                        size: {
                            value: 70, // Size of the email icon
                            random: true,
                            anim: {
                                enable: true,
                                speed: 5,
                                size_min: 10,
                                sync: false
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default EmailBoxAnimation;
