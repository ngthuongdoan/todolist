module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: String,
      color: String,
      uid: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Project = mongoose.model("project", schema);

  return Project;
};
