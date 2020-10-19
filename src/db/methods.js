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
          { _id: update.id },
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
        let entities = Model.find(filter).sort({ index: 1 });

        return entities;
      } catch (error) {
        return error;
      }
    },
  };
};
