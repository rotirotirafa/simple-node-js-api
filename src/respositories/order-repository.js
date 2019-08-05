const mongoose = require('mongoose')
const Order = mongoose.model('Order');

exports.create = async(data) => {
    var order = new Order(data);
    await order.save()
}

exports.get = async(data) => {
    var res = await Order
    .find({}) //filtro de conteudo pode ser aqui com , após o colchetes
    .populate('user')
    .populate('items.product');
    return res;
}