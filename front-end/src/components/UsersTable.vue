<template>
  <div class="container">
    <el-table :data="users" style="width: 100%">
      <el-table-column label="Username" prop="username"> </el-table-column>
      <el-table-column label="First Name" prop="first_name"> </el-table-column>
      <el-table-column label="Last Name" prop="last_name"> </el-table-column>
      <el-table-column label="Email" prop="email"> </el-table-column>
      <el-table-column label="Operations" align="center">
        <template slot-scope="{ row }">
          <el-button size="mini" type="primary" @click="handleEdit(row)"
            >Edit</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="userButton">
      <el-button type="success" class="mt-5" @click="handleNewUser()"
        >New User</el-button
      >
    </div>

    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Username" :label-width="formLabelWidth">
          <el-input
            v-model="form.username"
            autocomplete="off"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="First Name" :label-width="formLabelWidth">
          <el-input v-model="form.first_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" :label-width="formLabelWidth">
          <el-input v-model="form.last_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="userCreateUpdate(form.id)">{{
          formButton
        }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { axiosHelper } from "../helpers/axios.js";
export default {
  name: "UsersPage",
  data() {
    return {
      users: [],
      dialogFormVisible: false,
      form: {
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        username: "",
      },
      formLabelWidth: "120px",
      formName: "",
      formButton: "",
      isEmailFormatCorrect: false,
    };
  },

  mounted() {
    axiosHelper.getAll("users", this.callback);
  },

  computed: {
    setUsername() {
      return (
        this.form.first_name
          .replace(/\s+/g, " ")
          .trim()
          .split(" ")
          .join(".") +
        "." +
        this.form.last_name
          .replace(/\s+/g, " ")
          .trim()
          .split(" ")
          .join(".")
      );
    },

    emailValidate() {
      return this.form.email;
    },
  },

  watch: {
    emailValidate(val) {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(val)) {
        this.isEmailFormatCorrect = true;
      } else {
        this.isEmailFormatCorrect = false;
      }
    },
    setUsername(val) {
      this.form.username = this.turkishtoEnglish(val.toLowerCase());
    },
  },

  methods: {
    handleNewUser() {
      this.formName = "New User";
      this.formButton = "Create";
      this.dialogFormVisible = true;
      this.form.id = "";
      this.form.username = "";
      this.form.first_name = "";
      this.form.last_name = "";
      this.form.email = "";
    },
    handleEdit(row) {
      this.formName = "Update User";
      this.formButton = "Update";
      this.dialogFormVisible = true;
      this.form = Object.assign({}, row);
    },

    handleDelete(id) {
      this.$confirm(
        "This will permanently delete this user. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          axiosHelper.deleteById("users/", id, this.callback);
        })
        .catch(() => {
          this.showMessage("info", "Delete canceled.");
        });
    },

    userCreateUpdate(id) {
      if (!this.form.first_name || !this.form.last_name) {
        this.showMessage(
          "error",
          "User's first name or last name is blank. Please check it."
        );
      } else if (this.isEmailFormatCorrect == false) {
        this.showMessage(
          "error",
          "Email is not correct format or blank. Please check it."
        );
      } else {
        if (this.formButton == "Update") {
          axiosHelper.updateById("users/", id, this.form, this.callback);
        } else {
          axiosHelper.create("users", this.form, this.callback);
        }
      }
    },
    turkishtoEnglish(str) {
      return str
        .replace(/ğ/gim, "g")
        .replace(/ü/gim, "u")
        .replace(/ş/gim, "s")
        .replace(/ı/gim, "i")
        .replace(/ö/gim, "o")
        .replace(/ç/gim, "c");
    },
    showMessage(type, message) {
      this.$message({
        type: type,
        message: message,
      });
    },
    callback(r) {
      if (r.status == 200) {
        if (r.config.method == "get") {
          this.users = r.data;
        } else if (r.config.method == "put") {
          axiosHelper.getAll("users", this.callback);
          this.dialogFormVisible = false;
          this.showMessage("success", "User updated successfully.");
        } else if (r.config.method == "delete") {
          axiosHelper.getAll("users", this.callback);
          this.showMessage("success", "User deleted successfully.");
        }
      } else if (r.status == 201) {
        axiosHelper.getAll("users", this.callback);
        this.dialogFormVisible = false;
        this.showMessage("success", "User created successfully.");
      } else {
        this.showMessage("error", r);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userButton {
  display: flex;
  justify-content: center;
}
</style>
