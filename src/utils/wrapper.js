const wrapper = (controller) => async (teq, res, next) => {
    try {
        await controller(req, res)
    } catch (error) {
        next(error)
    }
}

export default wrapper