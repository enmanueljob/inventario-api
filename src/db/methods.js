module.exports = function (Model) {
  return {
    async save(data = {}) {
      try {
        const entity = new Model(data);

        const entitySaved = await entity.save();

        return entitySaved;
      } catch (error) {
        return error;
      }
    },
    async update(data = {}) {
      try {
        let entityUpdated = await Model.findOneAndUpdate(
          { _id: data.id },
          { $set: data },
          { new: true }
        );
        return entityUpdated;
      } catch (error) {
        return error;
      }
    },
    async delete(id) {
      try {
        const doc = await Model.findById(id);
        doc.remove();
        return true;
      } catch (error) {
        return error;
      }
    },
    async getById(id) {
      try {
        let entity = await Model.findById(id);
        return entity;
      } catch (error) {
        return error;
      }
    },
    async get(filter = {}) {
      try {
        let results = Model.find(filter);
        return results;
      } catch (error) {
        return error;
      }
    },
    async paginate(filter = {}, pagination = {}) {
      try {
        // Paginacion sin librerias ademas de mongoose
        // let result = Model.find(filter)
        //   .skip(options.offset || 0)
        //   .limit(options.limit || 0)
        //   .sort({ index: 1 });

        const options = {
          page: 1,
          ...pagination,
        };
        const result = await Model.paginate({}, options);
        return result;
      } catch (error) {
        return error;
      }
    },
    async insertMany(rows = []) {
      try {
        return Model.insertMany(rows);
      } catch (error) {
        return error;
      }
    },
  };
};
