const create = (createUsecase) => async (req, res) => {
    let response = await createUsecase(req.body);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

const update = (updateUsecase) => async (req, res) => {
    let response = await updateUsecase(req.params.id, req.body);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

const deleteOne = (deleteUsecase) => async (req, res) => {
    let response = await deleteUsecase(req.params.id);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

const softDelete = (softDeleteUsecase) => async (req, res) => {
    let response = await softDeleteUsecase(req.params.id);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

const findOne = (finOneUsecase) => async (req, res) => {
    let response = await finOneUsecase(req.params.id);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

const count = (countUsecase) => async (req, res) => {
    let response = await countUsecase(req.body);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

const list = (listUsecase) => async (req, res) => {
    let response = await listUsecase(req.body);
    return res.set(response.headers).status(response.statusCode).send(response.body);
};

module.exports = { create, update, deleteOne, softDelete, findOne, count, list }