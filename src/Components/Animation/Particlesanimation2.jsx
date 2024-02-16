import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particlesanimation2 = () => {
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
                            value: "#000000"
                        },
                        image: "",
                        position: "",
                        repeat: "",
                        size: "",
                        opacity: 1
                    },
                    backgroundMask: {
                        composite: "destination-out",
                        cover: {
                            color: {
                                value: "#ffffff"
                            },
                            opacity: 1
                        },
                        enable: false
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
                            },
                            attract: {
                                distance: 200,
                                duration: 0,
                                easing: "ease-out-quad",
                                factor: 1,
                                maxSpeed: 10,
                                speed: 10
                            },
                            bounce: {
                                distance: 200
                            },
                            bubble: {
                                distance: 200,
                                duration: 0,
                                mix: false,
                                divs: {
                                    distance: 200,
                                    duration: 4,
                                    mix: false,
                                    selectors: []
                                }
                            },
                            connect: {
                                distance: 80,
                                links: {
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grab: {
                                distance: 100,
                                links: {
                                    blink: false,
                                    consent: false,
                                    opacity: 1
                                }
                            },
                            push: {
                                default: true,
                                groups: [],
                                quantity: 4
                            },
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 5,
                                factor: 100,
                                speed: 1,
                                maxSpeed: 50,
                                easing: "ease-out-quad",
                                divs: {
                                    distance: 200,
                                    duration: 0.4,
                                    factor: 100,
                                    speed: 1,
                                    maxSpeed: 50,
                                    easing: "ease-out-quad",
                                    selectors: []
                                }
                            },
                            slow: {
                                factor: 3,
                                radius: 200
                            },
                            light: {
                                area: {
                                    gradient: {
                                        start: {
                                            value: "#ffffff"
                                        },
                                        stop: {
                                            value: "#000000"
                                        }
                                    },
                                    radius: 1000
                                },
                                shadow: {
                                    color: {
                                        value: "#000000"
                                    },
                                    length: 2000
                                }
                            }
                        }
                    },
                    manualParticles: [],
                    particles: {
                        bounce: {
                            horizontal: {
                                value: 1
                            },
                            vertical: {
                                value: 1
                            }
                        },
                        collisions: {
                            absorb: {
                                speed: 2
                            },
                            bounce: {
                                horizontal: {
                                    value: 1
                                },
                                vertical: {
                                    value: 1
                                }
                            },
                            enable: false,
                            maxSpeed: 50,
                            mode: "bounce",
                            overlap: {
                                enable: true,
                                retries: 0
                            }
                        },
                        color: {
                            value: "#00D0BA",
                            animation: {
                                h: {
                                    count: 0,
                                    enable: true,
                                    speed: 10,
                                    decay: 0,
                                    delay: 0,
                                    sync: true,
                                    offset: 0
                                },
                                s: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: true,
                                    offset: 0
                                },
                                l: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: true,
                                    offset: 0
                                }
                            }
                        },
                        effect: {
                            close: true,
                            fill: true,
                            options: {},
                            type: []
                        },
                        groups: {},
                        move: {
                            angle: {
                                offset: 0,
                                value: 90
                            },
                            attract: {
                                distance: 200,
                                enable: false,
                                rotate: {
                                    x: 3000,
                                    y: 3000
                                }
                            },
                            center: {
                                x: 50,
                                y: 50,
                                mode: "percent",
                                radius: 0
                            },
                            decay: 0,
                            distance: {},
                            direction: "none",
                            drift: 0,
                            enable: true,
                            gravity: {
                                acceleration: 9.81,
                                enable: false,
                                inverse: false,
                                maxSpeed: 50
                            },
                            path: {
                                clamp: false,
                                delay: {
                                    value: 0
                                },
                                enable: true,
                                options: {
                                    sides: 6,
                                    turnSteps: 30,
                                    angle: 30
                                },
                                generator: "polygonPathGenerator"
                            },
                            outModes: {
                                default: "destroy",
                                bottom: "destroy",
                                left: "destroy",
                                right: "destroy",
                                top: "destroy"
                            },
                            random: false,
                            size: false,
                            speed: 3,
                            spin: {
                                acceleration: 0,
                                enable: false
                            },
                            straight: false,
                            trail: {
                                enable: true,
                                length: 20,
                                fill: {
                                    color: {
                                        value: "#000"  //background
                                    }
                                }
                            },
                            vibrate: false,
                            warp: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            limit: 0,
                            value: 80
                        },
                        opacity: {
                            value: 1,
                            animation: {
                                count: 0,
                                enable: false,
                                speed: 2,
                                decay: 0,
                                delay: 0,
                                sync: false,
                                mode: "auto",
                                startValue: "random",
                                destroy: "none"
                            }
                        },
                        reduceDuplicates: false,
                        shadow: {
                            blur: 0,
                            color: {
                                value: "#000"
                            },
                            enable: false,
                            offset: {
                                x: 0,
                                y: 0
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 5
                            },
                            animation: {
                                count: 0,
                                enable: false,
                                speed: 5,
                                decay: 0,
                                delay: 0,
                                sync: false,
                                mode: "auto",
                                startValue: "random",
                                destroy: "none"
                            }
                        },
                        stroke: {
                            width: 0
                        },
                        zIndex: {
                            value: 0,
                            opacityRate: 1,
                            sizeRate: 1,
                            velocityRate: 1
                        },
                        destroy: {
                            mode: "none",
                            split: {
                                count: 1,
                                factor: {
                                    value: 3
                                },
                                rate: {
                                    value: {
                                        min: 4,
                                        max: 9
                                    }
                                },
                                sizeOffset: true
                            }
                        },
                        roll: {
                            enable: false,
                            mode: "vertical",
                            speed: 25
                        },
                        tilt: {
                            enable: false,
                            value: 0,
                            direction: "clockwise",
                            animation: {
                                enable: false,
                                speed: 0,
                                sync: false
                            }
                        },
                        twinkle: {
                            lines: {
                                enable: false,
                                frequency: 0.05,
                                opacity: 1
                            },
                            particles: {
                                enable: false,
                                frequency: 0.05,
                                opacity: 1
                            }
                        },
                        wobble: {
                            distance: 5,
                            enable: false,
                            speed: {
                                move: 10,
                                angle: 50
                            }
                        },
                        orbit: {
                            enable: false,
                            rotation: {
                                value: 45
                            },
                            width: 1,
                            opacity: 1,
                            animation: {
                                enable: false,
                                speed: 1,
                                sync: false,
                                count: 0,
                                delay: 0
                            }
                        },
                        links: {
                            enable: false,
                            frequency: 1,
                            opacity: 1,
                            shadow: {
                                enable: false,
                                blur: 5,
                                color: {
                                    value: "#000000"
                                }
                            },
                            triangles: {
                                enable: false,
                                frequency: 1
                            },
                            consent: false,
                            blink: false,
                            color: {
                                value: "#ffffff"
                            },
                            warp: false,
                            width: 1,
                            distance: 100
                        },
                        moveDistance: 200,
                        repulse: {
                            enabled: false,
                            distance: 1,
                            duration: 1,
                            factor: 1,
                            speed: 1
                        },
                        life: {
                            count: 0,
                            delay: {
                                sync: false,
                                value: 0
                            },
                            duration: {
                                sync: false,
                                value: 0
                            }
                        },
                        rotate: {
                            value: 0,
                            animation: {
                                enable: false,
                                speed: 0,
                                sync: false,
                                count: 0,
                                delay: 0
                            },
                            direction: "clockwise",
                            path: false
                        },
                        scale: 1,
                        tiltAnimation: {
                            enable: false,
                            speed: 0,
                            sync: false,
                            count: 0,
                            reverse: false
                        },
                        zLayers: 100,
                        zIndexFactor: 0,
                        pauseOnBlur: false,
                        pauseOnOutsideViewport: false,
                        responsive: [],
                        emitters: {
                            autoPlay: true,
                            size: {
                                width: 0,
                                height: 0,
                                mode: "percent"
                            },
                            position: {
                                x: 50,
                                y: 50
                            },
                            fill: true,
                            life: {
                                wait: false
                            },
                            rate: {
                                delay: 0.25,
                                quantity: 1
                            },
                            shape: {
                                type: "square",
                                options: {},
                                replace: {
                                    opacity: false,
                                    color: false
                                }
                            }
                        },
                        motion: {
                            disable: false,
                            reduce: {
                                factor: 4,
                                value: true
                            }
                        }
                    }
                }}
            />
        </div>
    );
};

export default Particlesanimation2;
