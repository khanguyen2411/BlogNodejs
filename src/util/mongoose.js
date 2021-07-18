module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObjecet: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
