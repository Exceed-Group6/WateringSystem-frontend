import axios from "axios";

export const getAllTree = async () => {
  const response = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed06/api/getall`
  );
  return response.data;
};

export const getTreeById = async (treeId) => {
  const response = await axios.get(
    `https://ecourse.cpe.ku.ac.th/exceed06/api/getbyid/${treeId}`
  );
  return response.data;
};

export const getRecord = async (treeId) => {
  const response = await axios.get(
    ` https://ecourse.cpe.ku.ac.th/exceed06/api/getrecord/${treeId}`
  );
  return response.data;
};

export const deleteTree = async (treeId) => {
  const response = await axios.delete(
    `https://ecourse.cpe.ku.ac.th/exceed06/api/deletetree/${treeId}`
  );
  return response.status;
};

export const addTree = async () => {
  const response = await axios.put(`
    https://ecourse.cpe.ku.ac.th/exceed06/api/postnewtree`);
  return response.status;
};

export const manualWater = async (treeId) => {
  const response = await axios.put(
    `https://ecourse.cpe.ku.ac.th/exceed06/api/water/${treeId}`
  );
  return response.status;
};

export const getwater = async (treeId) => {
  const response = await axios.get(
    ` https://ecourse.cpe.ku.ac.th/exceed06/api/getrecordwater/${treeId}`
  )
  return response.data;
};

export const getlight = async (treeId) => {
  const response = await axios.get(
    ` https://ecourse.cpe.ku.ac.th/exceed06/api/getrecordlight/${treeId}`
  );
  return response.data;
};

export const gettemp = async (treeId) => {
  const response = await axios.get(
    ` https://ecourse.cpe.ku.ac.th/exceed06/api/getrecordtemp/${treeId}`
  );
  return response.data;
};