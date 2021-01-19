// profile block------------------------------------------------------------------------------

const profileTitles = document.querySelectorAll(".profile__toggle__block__title");

const profileBtnLeft = document.querySelectorAll(
    ".profile__slider__img__elements__buttons .left"
);

const profileBtnRight = document.querySelectorAll(
    ".profile__slider__img__elements__buttons .right"
);

const profileMobile = document.querySelectorAll('.mob-profile__slider')

const profileDesktop = document.querySelectorAll('.profile__slider')

const profileDescriptions = document.querySelectorAll('.profile__toggle__block__description')

const profileBlock = document.querySelector('.profile')

profileTitles.forEach((el, i) => {
    ToggleImages(
        el,
        profileTitles,
        profileDesktop,
        profileMobile,
        i,
        profileDescriptions,
        "",
        profileBlock
    );
});


profileBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            profileTitles,
            profileDesktop,
            profileDescriptions
        );
        // Change styles for el #3
        // if (sellingTitles[2].classList.contains("active")) {
        //     // sellingImages.classList.add("row");
        // } else {
        //     // sellingImages.classList.remove("row");
        // }
    });
})


profileBtnLeft.forEach((el, i) => {
    el.addEventListener("click", () => {
        LeftBtn(
            profileTitles,
            profileDesktop,
            profileDescriptions
        );
        // Change styles for el #3
        // if (sellingTitles[2].classList.contains("active")) {
        //     sellingImages.classList.add("row");
        // } else {
        //     sellingImages.classList.remove("row");
        // }
    });
})


// extra block----------------------------------------------------------------------------------------------------------

const extraTitles = document.querySelectorAll(
    ".extra__toggle__block__title"
);

const extraBtnLeft = document.querySelectorAll(
    ".extra__slider__img__elements__buttons .left"
);

const extraBtnRight = document.querySelectorAll(
    ".extra__slider__img__elements__buttons .right"
);

const extraMobile = document.querySelectorAll('.mob-extra__slider')

const extraDesktop = document.querySelectorAll('.extra__slider')

const extraDescriptions = document.querySelectorAll('.extra__toggle__block__description')

const extraBlock = document.querySelector('.extra')

extraTitles.forEach((el, i) => {
    // Change styles slider for el #3
    el.addEventListener("click", () => {
        // if (i === 2) {
        //     // extraImages.classList.add("row");
        // } else {
        //     extraImages.classList.remove("row");
        // }
    });

    ToggleImages(
        el,
        extraTitles,
        extraDesktop,
        extraMobile,
        i,
        extraDescriptions,
        '-',
        extraBlock
    );
});


extraBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            extraTitles,
            extraDesktop,
            extraDescriptions,
            "-"
        );
        // Change styles for el #3
        // if (extraTitles[2].classList.contains("active")) {
        //     // extraImages.classList.add("row");
        // } else {
        //     // extraImages.classList.remove("row");
        // }
    });
})


extraBtnLeft.forEach((el, i) => {
    el.addEventListener("click", () => {
        LeftBtn(
            extraTitles,
            extraDesktop,
            extraDescriptions,
            '-'
        );
        // Change styles for el #3
        // if (extraTitles[2].classList.contains("active")) {
        //     extraImages.classList.add("row");
        // } else {
        //     extraImages.classList.remove("row");
        // }
    });
})


// Tools block---------------------------------------------------------------------------------------------------------

const toolsTitles = document.querySelectorAll(
    ".tools__toggle__block__title"
);

const toolsBtnLeft = document.querySelectorAll(
    ".tools__slider__img__elements__buttons .left"
);

const toolsBtnRight = document.querySelectorAll(
    ".tools__slider__img__elements__buttons .right"
);

const toolsMobile = document.querySelectorAll('.mob-tools__slider')

const toolsDesktop = document.querySelectorAll('.tools__slider')

const toolsDescriptions = document.querySelectorAll('.tools__toggle__block__description')

const toolsBlock = document.querySelector('.tools')

toolsTitles.forEach((el, i) => {

    ToggleImages(
        el,
        toolsTitles,
        toolsDesktop,
        toolsMobile,
        i,
        toolsDescriptions,
        "",
        toolsBlock
    );
});


toolsBtnRight.forEach((el, i) => {
    el.addEventListener("click", () => {
        RightBtn(
            toolsTitles,
            toolsDesktop,
            toolsDescriptions
        );
    });
})


toolsBtnLeft.forEach((el, i) => {
    el.addEventListener("click", () => {
        LeftBtn(
            toolsTitles,
            toolsDesktop,
            toolsDescriptions
        );
    });
})


// FUNCTIONS --------------------------------------------------------------------------------------------------------


function ChangeImages(element, desktopItems, i, direction = "") {

    if (element.classList.contains("active")) {

        // Show slider block
        desktopItems.forEach((el) => {
            el.classList.remove('active')
            el.classList.add('disabled')
        })

        desktopItems[i].classList.remove('disabled')
        desktopItems[i].classList.add('active')

        let bgToRipple = desktopItems[i].querySelector('.toggle-bg-img')

        if (!bgToRipple.classList.contains('rippled')) {

            let bgToRippleClassName = bgToRipple.className.split(' ')[0]

            let queryBgToRipple = $(`.${bgToRippleClassName}`)

            rippleBg(queryBgToRipple, bgToRipple.clientWidth)
        }

        bgToRipple.classList.remove('rippled')

        desktopItems[i].querySelectorAll('.toggle-parent').forEach((el) => {

            if (!el.classList.contains('animate')) {

                let child = el.querySelector('.toggle-div')

                let containerWidth = document.querySelector(`.profile .container`).clientWidth

                let documentWidth = document.documentElement.clientWidth

                let emptyWidth = (documentWidth - containerWidth) / 2

                let maxWidth = emptyWidth + containerWidth / 2

                el.style.maxWidth = `${maxWidth}px`

                let childWidth = el.clientWidth

                if (maxWidth == childWidth) {
                    el.style.transform = `translateX(${direction}${(documentWidth - containerWidth) / 2}px)`
                } else {
                    el.style.transform = `translateX(${direction}20%)`
                }

                child.style.width = `${childWidth}px`;
                // child.style.maxWidth = `${}`


                child.classList.remove('op-0')


                window.addEventListener('resize', () => {

                    let documentWidth = document.documentElement.clientWidth

                    if (documentWidth > 1150) {

                        let containerWidth = document.querySelector(`.profile .container`).clientWidth

                        let emptyWidth = (documentWidth - containerWidth) / 2

                        let maxWidth = emptyWidth + containerWidth / 2

                        el.style.maxWidth = `${maxWidth}px`

                        let childWidth = el.clientWidth

                        if (maxWidth == childWidth) {
                            el.style.transform = `translateX(${direction}${(documentWidth - containerWidth) / 2}px)`
                        } else {
                            el.style.transform = `translateX(${direction}20%)`
                        }

                        child.style.width = `${childWidth}px`;
                        // child.style.maxWidth = `${el.style.maxWidth}px`

                        let childCanvas = child.querySelector('canvas')
                        if (childCanvas) {
                            childCanvas.style.width = `${childWidth}px`
                            childCanvas.style.maxWidth = `${el.style.maxWidth}px`
                        }
                    }
                })


                let queryRipple = $(`.${child.className.split(' ')[0]}`)

                rippleElement(queryRipple, childWidth)

                el.classList.add('animate')

                setTimeout(() => {
                    el.classList.remove('animate')
                }, 1200)


            }
        })

    } else {

        // hide images
        desktopItems[i].querySelectorAll('.toggle-div').forEach((el) => {
            el.classList.add('op-0')
        })
    }
}

function ChangeImagesMob(element, mobileItem, i) {

    if (element.classList.contains('active')) {

        mobileItem.querySelectorAll('.mob-toggle-parent').forEach((el) => {

            if (!el.classList.contains('animate')) {
                el.style.maxWidth = `${document.documentElement.clientWidth}px`
                let child = el.querySelector('.mob-toggle-div')

                let childWidth = el.clientWidth

                child.style.width = `${childWidth}px`;


                window.addEventListener('resize', () => {

                    let documentWidth = document.documentElement.clientWidth

                    if (documentWidth <= 1150) {

                        el.style.maxWidth = `${documentWidth}px`

                        let childWidth = el.clientWidth
                        child.style.width = `${childWidth}px`;
                        child.style.maxWidth = `${documentWidth}px`

                        let childCanvas = child.querySelector('canvas')
                        if (childCanvas) {
                            childCanvas.style.width = `${childWidth}px`
                            childCanvas.style.maxWidth = `${documentWidth}px`
                        }
                    }
                })

                let queryRipple = $(`.${child.className.split(' ')[0]}`)

                rippleElement(queryRipple, childWidth)

                el.classList.add('animate')

                setTimeout(() => {
                    el.classList.remove('animate')
                }, 1200)
            }
        })
    }
}

function ToggleImages(el, titles, desktopItems, mobileItems, i, descriptions, direction, block) {
    el.addEventListener("click", () => {

        descriptions.forEach((el) => {
            el.style.height = '0px'
        })

        if (document.documentElement.clientWidth > 1150) {
            if (el.classList.contains("active") && !el.classList.contains('rm-active')) {

                el.classList.remove("active");

            } else {

                titles.forEach((el) => {

                    el.classList.remove("active");
                });

                el.classList.add("active");

            }

            if (el.classList.contains('active')) {
                descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`
            }

            window.addEventListener('resize', () => {
                if (el.classList.contains('active')) {
                    descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`
                }
            })

            titles[0].classList.remove('rm-active')
            ChangeImages(el, desktopItems, i, direction);

        } else { // MOBILE--------------------------------------------------------------------------

            if (el.classList.contains("active") || el.classList.contains('rm-active')) {

                el.classList.remove("active");
                el.classList.remove('rm-active')

            } else {

                titles.forEach((el) => {

                    el.classList.remove("active");
                });

                el.classList.add("active");
            }

            if (el.classList.contains('active')) {

                descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`

            }

            window.addEventListener('resize', () => {

                if (el.classList.contains('active')) {
                    descriptions[i].style.height = `${descriptions[i].querySelector('p').clientHeight}px`

                }
            })

            titles[0].classList.remove('rm-active')

            $("html,body").animate(
                {
                    scrollTop: block.offsetTop + titles[0].offsetTop + i * titles[0].clientHeight - 20,
                    behavior: "smooth",
                },
                800
            );

            ChangeImagesMob(el, mobileItems[i])

        }

    });


}

function RightBtn(titles, itemsDesktop, descriptions, direction) {
    let currentSlide = -1;
    let nextSlide;

    descriptions.forEach((el) => {
        el.style.height = '0px'
    })

    titles.forEach((el, i) => {
        if (el.classList.contains("active")) {

            if (el.classList.contains('rm-active')) {

                return currentSlide = -1;

            } else {

                currentSlide = i;
                return currentSlide;

            }
        }
    });

    titles.forEach((el) => {
        el.classList.remove("active");
    });

    let getNextSlide = () => {
        if (currentSlide + 1 >= titles.length) {
            nextSlide = 0;
            return nextSlide;
        } else {
            nextSlide = currentSlide + 1;
            return nextSlide;
        }
    };
    getNextSlide();

    // console.log(nextSlide);
    // console.log(titles[nextSlide]);

    titles[nextSlide].classList.remove('rm-active')
    titles[nextSlide].classList.add("active");

    descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`


    window.addEventListener('resize', () => {

        if (titles[nextSlide].classList.contains('active')) {

            descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
        }
    })

    ChangeImages(titles[nextSlide], itemsDesktop, nextSlide, direction)

}

function LeftBtn(titles, itemsDesktop, descriptions, direction) {
    let currentSlide = -1;
    let nextSlide;

    descriptions.forEach((el) => {
        el.style.height = '0px'
    })

    titles.forEach((el, i) => {

        if (el.classList.contains("active")) {

            if (el.classList.contains('rm-active')) {

                return currentSlide = 0;

            } else {

                currentSlide = i;
                return currentSlide;

            }
        }
    });

    titles.forEach((el) => {
        el.classList.remove("active");
    });

    let getPrevSlide = () => {
        if (currentSlide - 1 <= -1) {
            nextSlide = titles.length - 1;
            return nextSlide;
        } else {
            nextSlide = currentSlide - 1;
            return nextSlide;
        }
    };
    getPrevSlide();

    titles[nextSlide].classList.remove('rm-active')
    titles[nextSlide].classList.add("active");

    descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`

    window.addEventListener('resize', () => {

        if (titles[nextSlide].classList.contains('active')) {

            descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
        }
    })

    ChangeImages(titles[nextSlide], itemsDesktop, nextSlide, direction);

    itemsDesktop[0].querySelector('.toggle-bg-img').classList.remove('rippled')
}

function rippleElement($elemToRipple, width) {
    $elemToRipple.ripples({
        resolution: 40,
        perturbance: 0.15,
        interactive: false,
        width: width
    });


    let x = 0.5 * $elemToRipple.outerWidth();
    let y = 0.5 * $elemToRipple.outerHeight();
    // let y = 0
    // let x = 0
    let dropRadius = 200;
    let strength = 0.15;

    $elemToRipple.ripples('drop', x, y, dropRadius, strength);
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.1)
    }, 400)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.05)
    }, 600)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.025)
    }, 1000)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0)
        $elemToRipple.ripples('destroy')
    }, 1200)
}

function rippleBg($elemToRipple, width) {
    $elemToRipple.ripples({
        resolution: 40,
        perturbance: 0.15,
        interactive: false,
        width: width
    });


    let x = 0.5 * $elemToRipple.outerWidth();
    let y = 0.5 * $elemToRipple.outerHeight();
    // let y = 0
    // let x = 0
    let dropRadius = 200;
    let strength = 0.15;

    $elemToRipple.ripples('drop', x, y, dropRadius, strength);
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.1)
    }, 600)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.05)
    }, 900)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0.025)
    }, 1200)
    setTimeout(() => {
        $elemToRipple.ripples('set', 'perturbance', 0)
        $elemToRipple.ripples('destroy')
    }, 1500)
}

// Mobile buttons

// profile-----------------------------------------------------------------------------------------------------------------

const profileMobBtnsLeft = document.querySelectorAll(
    ".mob-profile__slider__img__elements__buttons .left"
);

const profileMobBtnsRight = document.querySelectorAll(
    ".mob-profile__slider__img__elements__buttons .right"
);


profileMobBtnsLeft.forEach((el) => {
    LeftBtnMob(el, profileTitles, profileBlock, profileMobile, profileDescriptions)
});

profileMobBtnsRight.forEach((el) => {
    RgtBtnMob(el, profileTitles, profileBlock, profileMobile, profileDescriptions)
});


// extra

const extraMobBtnsLeft = document.querySelectorAll(
    ".mob-extra__slider__img__elements__buttons .left"
);

const extraMobBtnsRight = document.querySelectorAll(
    ".mob-extra__slider__img__elements__buttons .right"
);


extraMobBtnsLeft.forEach((el) => {
    LeftBtnMob(el, extraTitles, extraBlock, extraMobile, extraDescriptions)
});

extraMobBtnsRight.forEach((el) => {
    RgtBtnMob(el, extraTitles, extraBlock, extraMobile, extraDescriptions)
});


// Tools -----------------------------------------------------------------------------------------------------
const toolsMobBtnsLeft = document.querySelectorAll(
    ".mob-tools__slider__img__elements__buttons .left"
);

const toolsMobBtnsRight = document.querySelectorAll(
    ".mob-tools__slider__img__elements__buttons .right"
);


toolsMobBtnsLeft.forEach((el) => {
    LeftBtnMob(el, toolsTitles, toolsBlock, toolsMobile, toolsDescriptions)
});

toolsMobBtnsRight.forEach((el) => {
    RgtBtnMob(el, toolsTitles, toolsBlock, toolsMobile, toolsDescriptions)
});

// MOB BTNS FUNCTIONS -------------------------------------------------------------------------------------------------

function RgtBtnMob(el, titles, block, mobileItems, descriptions) {

    el.addEventListener("click", () => {

        let currentSlide = -1;
        let nextSlide;

        titles.forEach((el, i) => {
            if (el.classList.contains("active") || el.classList.contains('rm-active')) {
                currentSlide = i;
                return currentSlide;
            }
        });

        titles.forEach((el) => {
            el.classList.remove("active");
        });

        let getNextSlide = () => {
            if (currentSlide + 1 >= titles.length) {
                nextSlide = 0;
                return nextSlide;
            } else {
                nextSlide = currentSlide + 1;
                return nextSlide;
            }
        };
        getNextSlide();

        titles[0].classList.remove('rm-active')
        titles[nextSlide].classList.add("active");
        // console.log(titles[nextSlide].offsetTop);

        descriptions.forEach((el) => {
            el.style.height = '0px'
        })

        let currentHeight = descriptions[nextSlide].querySelector('p').clientHeight
        descriptions[nextSlide].style.height = `${currentHeight}px`


        window.addEventListener('resize', () => {

            if (titles[nextSlide].classList.contains('active')) {

                descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
            }
        })

        console.log(block.offsetTop);
        console.log(titles[nextSlide].offsetTop);
        console.log(block.offsetTop + titles[nextSlide].offsetTop);

        $("html,body").animate(
            {
                scrollTop: block.offsetTop + titles[0].offsetTop + nextSlide * titles[nextSlide].clientHeight - 20,
                behavior: "smooth",
            },
            800
        );

        ChangeImagesMob(titles[nextSlide], mobileItems[nextSlide])
    });
}

function LeftBtnMob(el, titles, block, mobileItems, descriptions) {

    el.addEventListener("click", () => {

        let currentSlide = -1;
        let nextSlide;

        titles.forEach((el, i) => {
            if (el.classList.contains("active")) {
                currentSlide = i;
                return currentSlide;
            }
        });

        titles.forEach((el) => {
            el.classList.remove("active");
        });

        let getPrevSlide = () => {
            if (currentSlide - 1 <= -1) {
                nextSlide = toolsTitles.length - 1;
                return nextSlide;
            } else {
                nextSlide = currentSlide - 1;
                return nextSlide;
            }
        };
        getPrevSlide();

        titles[0].classList.remove('rm-active')
        titles[nextSlide].classList.add("active");
        // console.log(titles[nextSlide].offsetTop);

        descriptions.forEach((el) => {
            el.style.height = '0px'
        })

        let currentHeight = descriptions[nextSlide].querySelector('p').clientHeight
        descriptions[nextSlide].style.height = `${currentHeight}px`

        window.addEventListener('resize', () => {

            if (titles[nextSlide].classList.contains('active')) {

                descriptions[nextSlide].style.height = `${descriptions[nextSlide].querySelector('p').clientHeight}px`
            }
        })

        $("html,body").animate(
            {
                scrollTop: block.offsetTop + titles[0].offsetTop + nextSlide * titles[nextSlide].clientHeight - 20,
                behavior: "smooth",
            },
            800
        );
        ChangeImagesMob(titles[nextSlide], mobileItems[nextSlide])
    });

}

setTimeout(() => {
    let windowWidth = document.documentElement.clientWidth
    if (windowWidth < 1150) {
        document.querySelectorAll('.mob-toggle-parent').forEach(el => {
            el.style.width = `${windowWidth}px`
            window.addEventListener('resize', () => {
                let windowWidth = document.documentElement.clientWidth
                el.style.width = `${windowWidth}px`
            })
        })

    }


}, 3500)
