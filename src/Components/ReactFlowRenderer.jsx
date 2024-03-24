import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionLineType
} from "react-flow-renderer";
import { nodes as initialNodes, edges as initialEdges } from "./Element";
import { Button, Modal, Input, Form } from "antd";

function ReactFlowRenderer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: ConnectionLineType.SmoothStep,
            animated: true,
            style: { stroke: "black" },
          },
          eds
        )
      ),
    [setEdges]
  );
  const getNodeId = () => Math.random();
  function onInit() {
    console.log("Logged");
  }
  
  function displayCustomNamedNodeModal() {
    setIsModalVisible(true);
  }
  function handleCancel() {
    setIsModalVisible(false);
  }
  function handleOk(data) {
    onAdd(data.nodeName);
    setIsModalVisible(false);
  }
  const onAdd = useCallback(
    (data) => {
      const newNode = {
        id: String(getNodeId()),
        data: { label: data },
        position: {
          x: 50,
          y: 0,
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );
  return (
    <div className="w-[100%]">
      <div style={{ height: "100vh", margin: "10px" }}>
        <Modal
          title="Add Your Custom Node"
          open={isModalVisible}
          onCancel={handleCancel}
        >
          <Form onFinish={handleOk} autoComplete="off" name="new node">
            <Form.Item label="Node Name" name="nodeName">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button className="bg-blue-600  "  htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Button
          className=" bg-blue-600 text-white"
          onClick={() => displayCustomNamedNodeModal()}
        >
          Create Custom Name Node
        </Button>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          attributionPosition="bottom-left"
          connectionLineType={ConnectionLineType.SmoothStep}
        />
      </div>
    </div>
  );
}

export default ReactFlowRenderer;
