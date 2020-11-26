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
    async get(filter = {}, options = {}) {
      try {
        let entities = Model.find(filter)
          .skip(options.offset || 0)
          .limit(options.limit || 0)
          .sort({ index: 1 });

        return entities;
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
