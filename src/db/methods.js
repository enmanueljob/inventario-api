module.exports = function (Model) {
  return {
    async save(data = {}) {
      try {
        const client = new Model(data);

        const clientSaved = await client.save();

        return clientSaved;
      } catch (error) {
        return error;
      }
    },
    async update(data = {}) {
      try {
        let courseUpdated = await Model.findOneAndUpdate(
          { _id: update.id },
          { $set: data },
          { new: true }
        );
        return courseUpdated;
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
        let client = await Model.findById(id);

        return client;
      } catch (error) {
        return error;
      }
    },
    async getBy(filter = {}) {
      try {
        let result = Model.find(filter).sort({ index: 1 });

        return result;
      } catch (error) {
        return error;
      }
    },
  };
};
